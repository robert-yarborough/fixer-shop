import useSwr from 'swr';
import React, { useState, useContext } from 'react';
import ServiceSelector from '../components/ServiceSelector';
import {
  Box,
  Container,
  Typography
} from '@mui/material';
import {CaseFormContext} from "../components/CaseForm";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const [caseData, setCaseData] = useContext(CaseFormContext);
  const { data, error } = useSwr('/api/services', fetcher);
  const [supportCases, setSupportCases] = useState([]);


  console.log('Caseformcontext', caseData);
  const cases = caseData;
  console.log('cases', cases);
  // callback to update support case list
  const updateSupportCaseList = (data) => {
    setSupportCases(data);
  }

  if(error) return <div>Failed to load cases!</div>
  if(!data) return <div>Loading...</div>

  return (
    <Container maxWidth="lg">
      <Box sx={{ m: 'auto' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          How can we help?
        </Typography>
        <ServiceSelector {...data}/>

        <Typography variant="h4" component="h1" gutterBottom>
          Current Support Cases
        </Typography>

      </Box>
    </Container>
  )
}
