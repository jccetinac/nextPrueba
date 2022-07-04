import styles from '../styles/Home.module.css';
import Router from 'next/router'
import axios from 'axios';
import { useState } from 'react';

export default function CreatePerson({userData}) {

  const [student, setStudent] = useState(userData? userData.Student : '');
  const [city, setCity] = useState(userData? userData.City : '');
  const [industry, setIndustry] = useState(userData? userData.Industry : '');
  const [interest, setInterest] = useState(userData? userData.Interests: '');


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
          if(userData){
            const response = await axios.put(`${url}/${userData.id}`, payload);
            console.log(response);
            Router.push(`/person/${userData.id}`);

          }
          else{
            const response = await axios.post(url, payload);
            console.log(response);
            Router.push(`/`);
          }
        }catch(e){
          console.log('algo fallo', e);
        }

      }

  return (
    <div className={styles.createContainer}>
    <form onSubmit={(e)=> createPerson(e)} className={styles.formCreate}>
      <h4>crear usuario</h4>
      <input type="text" value={student} onChange={(e)=>{setStudent(e.target.value)}} className={styles.input} placeholder='Nombre'></input>
      <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} className={styles.input} placeholder='City'></input>
      <input type="text" value={industry} onChange={(e)=>{setIndustry(e.target.value)}} className={styles.input} placeholder='Industry'></input>
      <input type="text" value={interest} onChange={(e)=>{setInterest(e.target.value)}} className={styles.input} placeholder='Interest'></input>
      <button>{userData? 'Actualizar':'Crear'}</button>
    </form>

</div>
    )
}