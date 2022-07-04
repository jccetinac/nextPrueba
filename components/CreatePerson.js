import styles from '../styles/Home.module.css';
import Router from 'next/router'
import axios from 'axios';

export default function CreatePerson() {

    const createPerson = async (e)=>{
 
        console.log('creating');
        const url = 'https://retoolapi.dev/ptT4Ib/data';
        const payload = {
            "City": "Bogota",
            "Student": "jk7",
            "Industry": "Communication",
            "Interests": "Football"
        };
        const response = await axios.post(url, payload);
        // e.preventDefault();
        // Router.push('/');
      }

  return (
    <div className={styles.createContainer}>
    <form onSubmit={(e)=> createPerson(e)} className={styles.formCreate}>
      <h4>crear usuario</h4>
      <input type="text" className={styles.input} placeholder='Nombre'></input>
      <input type="text" className={styles.input} placeholder='City'></input>
      <input type="text" className={styles.input} placeholder='Industry'></input>
      <input type="text" className={styles.input} placeholder='Interest'></input>
      <button>crear</button>

    </form>

</div>
    )
}