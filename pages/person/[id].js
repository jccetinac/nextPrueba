import { useRouter } from 'next/router'
import axios from 'axios';
export default function GspPage({City, Student, Industry, Interest}) {
  const router = useRouter();
  const { isFallback, query } = router;

  if (isFallback) {
    return 'Loading...'
  }
  
  return (
    <div>
      <h1>person</h1>
      <p>ID: {query.id}</p>
      <p>{City}</p>
      <p>{Student}</p>
      <p>{Industry}</p>
      <p>{Interest}</p>
    </div>
  )
}

export const getStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(200)].map( ( value, index ) => `${ index + 1 }` );

  return {
    paths: pokemons151.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}


export const getStaticProps = async ({params}) => {
  const { id } = params ;
  
  const { data } = await axios.get(`https://retoolapi.dev/cSZH8I/data/${ id }`);

  console.log(data);
  return {
    props: data,
  }
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes



