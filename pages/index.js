import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, et expedita voluptas facere blanditiis exercitationem dolorem maxime eligendi quas modi provident beatae repudiandae voluptates consequatur vitae perspiciatis placeat consequuntur distinctio.</p>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio culpa quibusdam voluptatibus deserunt at, iste id odio! Earum recusandae veritatis provident, nemo, in distinctio iusto eos cum, labore nobis atque?</p>
      <Link href="ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
      </div>
      </>
  )
}
