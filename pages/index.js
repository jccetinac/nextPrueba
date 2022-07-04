import { useState } from 'react';

import Head from 'next/head';
import axios from 'axios';

import styles from '../styles/Home.module.css';
import Person from '../components/Person';
import CreatePerson from '../components/CreatePerson';

export default function Home({people}) {
  const [filter, setFilter] = useState('');
  const [peopleFiltered, setPeopleFiltered] = useState(people);

  const updateListByFilter = (filterValue) => {
    setFilter(filterValue);
    const tempList = people.filter(person => person.Student.toLowerCase().indexOf(filterValue) > -1);
    setPeopleFiltered(tempList);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>University Students</title>
      </Head>
      <div>
      </div>
      <div className={styles.containerMain}>
        <main className={styles.main}>
          <form>
          <input 
            type="text" 
            value={filter} 
            onChange={(e)=>updateListByFilter(e.target.value)} 
            className={styles.input}
             placeholder="search by name"
          />            
          </form>


          <h1>User List</h1>
          {peopleFiltered?.map( person => (
            <Person key={person.id} person={person}/>
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