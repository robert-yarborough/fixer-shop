export default function caseHandler(req, res){
  const {
    query: { id, status, subject, description },
    method,
  } = req;

  const deviceName = (id === '1') ? 'Mobile' : (id === '2') ? 'Tablet' : (id === '3') ? 'Laptop' : null;



  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ id, status, subject, description });
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: `${deviceName}` || `${deviceName} ${id}` })
      break
    case 'POST':
      // Update or create data in your database

      res.status(200).json({ id, status, subject, description });
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}