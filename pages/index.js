import useSwr from 'swr';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSwr('/api/cases', fetcher);
  if(error) return <div>Failed to load cases!</div>
  if(!data) return <div>Loading...</div>
  return (
    <ul className={styles.container}>
      {data && data.map((cases) => (
        <li key={cases.id}>
          <Link href="/case/[id]" as={`/case/${cases.id}`}>
            {`Case ${cases.id}`}
          </Link>
        </li>
      ))}
    </ul>
  )
}
