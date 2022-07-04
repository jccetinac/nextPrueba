
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
            <a className={styles.buttonSend}>back to list</a>
          </Link>
        </main>
        <CreatePerson userData={person} />
      </div>
    </div>
  )
}

export const getStaticPaths = async (ctx) => {

  const { data } = await axios.get('https://retoolapi.dev/ptT4Ib/data/');
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
  const { data } = await axios.get(`https://retoolapi.dev/ptT4Ib/data/${id}`);
  return {
    props: data,
  }
}




