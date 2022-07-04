
import { useRouter } from 'next/router'
import Link from 'next/link'

import axios from 'axios';
import Person from '../../components/Person';
export default function GspPage(person) {
  const router = useRouter();
  const { isFallback, query } = router;

  if (isFallback) {
    return 'Loading...'
  }
  
  return (
    <div>
      <Person person={person} details/>
      <Link href="/" as="/">
          <a>volver a la lista</a>
        </Link>
    </div>
  )
}

export const getStaticPaths = async (ctx) => {

  const {data} = await axios.get('https://retoolapi.dev/ptT4Ib/data/');
  const peopleList = [...Array(200)].map( ( value, index ) => `${ index }` );

  return {
    paths: peopleList.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}


export const getStaticProps = async ({params}) => {
  const { id } = params ;
  console.log('[EL ID]',id);
  const { data } = await axios.get(`https://retoolapi.dev/ptT4Ib/data/${ id }`);

  console.log(data);
  return {
    props: data,
  }
}




