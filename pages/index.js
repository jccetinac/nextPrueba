import { useState } from 'react';

import Head from 'next/head';
import axios from 'axios';

import styles from '../styles/Home.module.css';
import Person from '../components/Person';
import CreatePerson from '../components/CreatePerson';

export default function Home({people}) {
  console.log('reinicio');
  const [userSelected, setUserSelected] = useState(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>University Students</title>
      </Head>
      <div>
      </div>
      <div className={styles.containerMain}>
        <main className={styles.main}>
          <h1>User List</h1>
          {people.map( person => (
            <Person person={person} setUserSelected={setUserSelected}/>
          ))}
        </main>
        <CreatePerson />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get('https://retoolapi.dev/ptT4Ib/data');
  return {
    props: {people:data.reverse()},
  }
}