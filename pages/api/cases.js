// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// fake case data
const cases = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
];

export default function handler(req, res){
  //return fake case data
  res.status(200).json(cases);
}