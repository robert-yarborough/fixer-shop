export default function serviceHandler(req, res){
  const {
    query: { id },
    method,
  } = req;

  const deviceName = (id === 'mobile') ? 'Mobile' : (id === 'tablet') ? 'Tablet' : (id === 'laptop') ? 'Laptop' : null;

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ id, name: `${deviceName}` })
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: `${deviceName}` || `${deviceName}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}