import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import UsersTableClientSide from '../component/table/UsersTableClientSide';

export default function Example() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Personal Project - Ajaib</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UsersTableClientSide />
      </main>

      <footer className={styles.footer}>Sr. Frontend Ajaib Test</footer>
    </div>
  );
}
