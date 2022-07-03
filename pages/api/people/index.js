export default function personHandler({ query: { id } }, res) {
  res.status(200).json({ name: 'John Doe', is: 'id', id })
}
