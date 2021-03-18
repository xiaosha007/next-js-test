import Footer from "./comps/Footer";
import Navbar from "./comps/Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";
// import Head from 'next/Head';

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Ninja home</title>    
        <meta name="keywords" content="ninjas"/>
      </Head> */}
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>asdsadasdas</p>
        <p className={styles.text}>asdasdsdsd</p>
        <Link href="/ninjas/">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
