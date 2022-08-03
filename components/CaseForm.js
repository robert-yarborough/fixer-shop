import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import {
  Button,
  TextField
} from "@mui/material";

const validationSchema = yup.object({
  subject: yup.string('Enter a subject that best describes your device issue')
    .required('Subject is required'),
  description: yup.string('Enter a description to share information that details your device issue')
    .required('Description is required')
});

export default function CaseForm(){
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch('/api/cases');
    const cases = await response.json();
    setData(cases);
  }

  const postData = async (values) => {
    // const response = await fetch('/api/cases', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(values)
    // });
    // if (!response.ok) {
    //   throw new Error(`Error: ${response.status}`);
    // }
    // const cases = await response.json();

    setData((currentCases) => [...currentCases, { ...values, id: currentCases.length + 1}]);
  }

  const formik = useFormik({
    initialValues: {
      id: 0,
      status: 'open',
      subject: '',
      description: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('onSubmit', values);
      // make post request to update cases endpoint
      postData(values);
    }
  });

  useEffect(() => {
    //load initial cases for current user
    getData();
  }, []);


  console.log('data', data);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            id="subject"
            label="Subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            fullWidth/>
          <TextField
            id="description"
            label="Description"
            multiline
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            fullWidth
          />
        </div>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}