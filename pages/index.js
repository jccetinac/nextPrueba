import Head from 'next/head';
import axios from 'axios';

import styles from '../styles/Home.module.css';
import Person from '../components/Person';

export default function Home({people}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.bg}>
        <h1 className={styles.title}>
          Hola pianola to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {people.map( person => (
          <Person person={person}/>
        ))}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get('https://retoolapi.dev/cSZH8I/data');
  return {
    props: {people:data},
  }
}