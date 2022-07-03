import { useRouter } from 'next/router'

export default function GspPage(props) {
  const router = useRouter()
  const { isFallback, query } = router

  if (isFallback) {
    return 'Loading...'
  }
  
  console.log(props);
  return (
    <div>
      <h1>person</h1>
      <p>ID: {query.id}</p>
    </div>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      name: '123'
    },
  }
}

export const getStaticPaths = ({ locales }) => {
  const paths = []

  return {
    paths,
    fallback: true,
  }
}
