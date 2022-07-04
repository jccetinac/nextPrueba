
import { useRouter } from 'next/router'
import Link from 'next/link'

import axios from 'axios';
import styles from '../../styles/Home.module.css';

import Person from '../../components/Person';
import CreatePerson from '../../components/CreatePerson';
export default function PersonById(person) {
  const router = useRouter();
  const { isFallback, query } = router;

  if (isFallback) {
    return 'Loading...'
  }

  return (
    <div>
      <div className={styles.containerMain}>
        <main className={styles.main}>
          <Person person={person} details />
          <Link href="/" as="/">
            <a className={styles.buttonSend}>volver a la lista</a>
          </Link>
        </main>
        <CreatePerson userData={person} />
      </div>
    </div>
  )
}

export const getStaticPaths = async (ctx) => {

  const { data } = await axios.get('https://retoolapi.dev/ptT4Ib/data/');
  console.log(data.length, '[largo]');
  const peopleList = [...Array(data.length + 1)].map((value, index) => `${index}`);

  return {
    paths: peopleList.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}


export const getStaticProps = async ({ params }) => {
  const { id } = params;
  console.log('[EL ID]', id);
  const { data } = await axios.get(`https://retoolapi.dev/ptT4Ib/data/${id}`);

  console.log(data);
  return {
    props: data,
  }
}




