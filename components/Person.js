import axios from 'axios';
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import Router from 'next/router'

export default function Person({ person, details }) {
  const { id, City, Student, Industry, Interest } = person;

  const deleteHandle = async (idUser)=>{
    console.log('delete ' + idUser);
    const url=`https://retoolapi.dev/ptT4Ib/data/${idUser}` 
    const response = await axios.delete(url);
    Router.push('/');

  };

  return (
    <div className={styles.containerPerson}>
      <p>{Student}</p>
      {details ? (
        <>
          <h3>{City}</h3>
          <p>{Industry}</p>
          <p>{Interest}</p>
        </>
      ) : (
        <div className='actions'>
          <Link href="/person/[id]" as={`/person/${id}`}>
            <a>ver más</a>
          </Link>
          <button onClick={()=>deleteHandle(id)}>Delete</button>
        </div>
      )}


    </div>
  )
}
