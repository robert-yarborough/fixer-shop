import {useRouter} from "next/router";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Case(){
  const router = useRouter();
  const { data, error } = useSwr(
    router.query.id ? `/api/case/${router.query.id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load case...</div>
  if (!data) return <div>Loading...</div>
  console.log('Case: data obj', data);
  return <div>{data.name}</div>
}