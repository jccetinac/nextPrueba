import Head from 'next/head';
import axios from 'axios';

import styles from '../styles/Home.module.css';
import Person from '../components/Person';

export default function Home({people}) {
  const createPerson = ()=>{
    console.log('creacionadno');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1 className={styles.title}>
          Test Next.js + React
        </h1>
      <div>
      </div>
      <div className={styles.containerMain}>
        <main className={styles.main}>
        <h1>Lista de usuarios</h1>

          {people.map( person => (
            <Person person={person}/>
          ))}
        </main>

        <div className={styles.createContainer}>
            <form className={styles.formCreate}>
              <h4>crear usuario</h4>
              <input type="text" className={styles.input} placeholder='Nombre'></input>
              <input type="text" className={styles.input} placeholder='City'></input>
              <input type="text" className={styles.input} placeholder='Industry'></input>
              <input type="text" className={styles.input} placeholder='Interest'></input>
              <button onClick={()=>createPerson()}>crear</button>

            </form>

        </div>
      </div>

    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get('https://retoolapi.dev/cSZH8I/data');
  return {
    props: {people:data},
  }
}