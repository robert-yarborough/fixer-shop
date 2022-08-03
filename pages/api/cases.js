// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v4 as uuidv4 } from 'uuid';



// fake case data
const cases = [
  {
    id: 1,
    status: 'open',
    subject: '',
    description: ''
  },
  {
    id: 2,
    status: 'closed',
    subject: '',
    description: ''
  },
  {
    id: 3,
    status: 'open',
    subject: '',
    description: ''
  }
];

export default function handler(req, res){
  //return fake case data
  res.status(200).json(cases);
}