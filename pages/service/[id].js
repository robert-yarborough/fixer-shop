import {useRouter} from "next/router";
import useSwr from "swr";
import {
  Box,
} from '@mui/material';
import CaseForm from '../../components/CaseForm';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Service(){
  const router = useRouter();
  const { data, error } = useSwr(
    router.query.id ? `/api/service/${router.query.id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load case...</div>
  if (!data) return <div>Loading...</div>
  console.log('Service: data obj', data);
  switch (data.id){
    case 'mobile':
      return (
        <Box>
          <CaseForm />
        </Box>
      )
    case 'tablet':
      return (
        <Box>
          <CaseForm />
        </Box>
      )
    case 'labtop':
      return (
        <Box>
          <CaseForm />
        </Box>
      )
    default:
      return (
        <Box>
          <CaseForm />
        </Box>
      )
  }
}