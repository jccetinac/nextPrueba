export default function personHandler(req, res) {
  console.log(req);
  res.status(200).json({ name: 'Jkk' })
}