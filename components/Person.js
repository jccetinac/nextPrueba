import Link from 'next/link'
import styles from '../styles/Home.module.css';

export default function Person({ person, details }) {
  const { id, City, Student, Industry, Interest } = person;
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
        <li>
        <Link href="/person/[id]" as={`/person/${id}`}>
          <a>ver más</a>
        </Link>
      </li>
      )}


    </div>
  )
}
