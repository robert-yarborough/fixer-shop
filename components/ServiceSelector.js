import React, {useState} from 'react';
import Link from '../components/Link';
import {
  Box,
  FormControl,
  Select
} from "@mui/material";



export default function ServiceSelector(data){
  console.log('ServiceSelector: data', data);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const convertObjtoArr = Object.entries(data).map((key) => key[1]);
  console.log('convertObjtoArr', convertObjtoArr);
  return (
    <Box sx={{ width: '100%'}}>
      <FormControl sx={{mb: 4, minWidth: 300}} size="medium">
        <Select
        id="serviceList"
        value={value}
        onChange={handleChange}>
            {Array.isArray(convertObjtoArr) && convertObjtoArr.map((service) => (
                <menu sx={{ p: 1 }} key={service.id}>
                  <Link sx={{textDecoration: 'none'}} href="/service/[id]" as={`/service/${service.id}`} value={service.id}>
                    {`${service.id}`}
                  </Link>
                </menu>
              )
            )}
        </Select>
      </FormControl>
    </Box>
  )
}
