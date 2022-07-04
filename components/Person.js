import axios from 'axios';
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import Router from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEye, faUserCircle } from "@fortawesome/free-regular-svg-icons";

export default function Person({ person, details }) {
  const { id, City, Student, Industry, Interests } = person;

  const deleteHandle = async (idUser) => {
    const url = `https://retoolapi.dev/ptT4Ib/data/${idUser}`
    const response = await axios.delete(url);
    Router.push('/');

  };

  return (
    <div className={styles.containerPerson} key={id}>
      <div className={styles.profileUser}>
        <Link href="/person/[id]" as={`/person/${id}`}>
          <div className={styles.imageButton}>
            <FontAwesomeIcon className={styles.photo} icon={faUserCircle} />
          </div>
        </Link>
      </div>
      <div className={styles.detailsUser}>
      <h3><b>{Student} </b></h3>
      <p><b>IdUser: </b>{id}</p>

      {details ? (
        <>
          <p><b>City: </b>{City}</p>
          <p><b>Industry: </b>{Industry}</p>
          <p><b>Interest: </b>{Interests}</p>
        </>
      ) : (
        <div className={styles.actions}>
          <Link href="/person/[id]" as={`/person/${id}`}>
            <div className={styles.actionButton} >
              <FontAwesomeIcon icon={faEye} />
            </div>
          </Link>
          <button className={styles.actionButton} onClick={() => deleteHandle(id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      )}
      </div>
    </div>
  )
}
