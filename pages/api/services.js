// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// fake services data
const services = [
  {
    id: 'mobile'
  },
  {
    id: 'tablet'
  },
  {
    id: 'laptop'
  }
];

export default function handler(req, res){
  //return fake case data
  res.status(200).json(services);
}