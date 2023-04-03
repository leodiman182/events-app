import Head from 'next/head';
import styles from '@component/styles/home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {Header} from '@component/components/header/Header';
import {Footer} from '@component/components/footer/Footer';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Events app</title>
        <meta name="description" content="Generated by create next app and edited by Leonardo Diman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={ styles.header }>
        <h2>
          Welcome!
        </h2>
        <span>Browse to find events...</span>
      </header>
      <main className={ styles.main }>
        {
          data.map(category => (
            <Link
              key={ category.id }
              href={`/events/${ category.id }`}
            >
              <h2>{ category.title }</h2>
              <Image width={999} height={999} src={ category.image } alt={ category.title } />
              <p>
                { category.description }
              </p>
            </Link>
          ))
        }
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const { events_by_city } = await import('../data/data.json');
  
  return {
    props: {
      data: events_by_city
    }
  }
  
}