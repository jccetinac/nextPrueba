import styles from '../styles/Home.module.css';
import Router from 'next/router'
import axios from 'axios';
import { useState } from 'react';

export default function CreatePerson() {
  const [student, setStudent] = useState('');
  const [city, setCity] = useState('');
  const [industry, setIndustry] = useState('');
  const [interest, setInterest] = useState('');


    const createPerson = async (e)=>{
       e.preventDefault();

        console.log('creating');
        const url = 'https://retoolapi.dev/ptT4Ib/data';
        const payload = {
            "City": city,
            "Student": student,
            "Industry": industry,
            "Interests": interest
        };
        try{
          const response = await axios.post(url, payload);
          console.log(response);
          Router.push('/');
        }catch(e){
          console.log('algo fallo');
        }

      }

  return (
    <div className={styles.createContainer}>
    <form onSubmit={(e)=> createPerson(e)} className={styles.formCreate}>
      <h4>crear usuario</h4>
      <input type="text" onChange={(e)=>{setStudent(e.target.value)}} className={styles.input} placeholder='Nombre'></input>
      <input type="text" onChange={(e)=>{setCity(e.target.value)}} className={styles.input} placeholder='City'></input>
      <input type="text" onChange={(e)=>{setIndustry(e.target.value)}} className={styles.input} placeholder='Industry'></input>
      <input type="text" onChange={(e)=>{setInterest(e.target.value)}} className={styles.input} placeholder='Interest'></input>
      <button>crear</button>

    </form>

</div>
    )
}