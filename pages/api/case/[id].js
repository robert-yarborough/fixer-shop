

export default function caseHandler(req, res){
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case 'GET':
      // Get data from your database
      console.log('GET method', id);
      res.status(200).json({ id, name: `Case ${id}` })
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `Case ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}