import useSwr from 'swr';
import Link from '../components/Link';
import ServiceSelector from '../components/ServiceSelector';
import {
  Box,
  Container,
  Typography
} from '@mui/material';
import styles from '../styles/Home.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSwr('/api/services', fetcher);

  if(error) return <div>Failed to load cases!</div>
  if(!data) return <div>Loading...</div>
  return (
    <Container maxWidth="lg">
      <Box sx={{ m: 'auto' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          How can we help?
        </Typography>
        <ServiceSelector {...data} />
        <Typography variant="h4" component="h1" gutterBottom>
          Current Support Cases
        </Typography>

      </Box>
    </Container>
  )
}
