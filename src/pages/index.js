import Head from 'next/head';
import styles from '@component/styles/Home.module.css';
import Image from 'next/image';

export default function Home({ data }) {
  const date = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>Events app</title>
        <meta name="description" content="Generated by create next app and edited by Leonardo Diman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={ styles.header }>
        <nav>
          <img src="" alt="" />
          <a href="/events">Events</a>
          <a href="/about-us">About us</a>
        </nav>
      </header>
      <main className={ styles.main }>
        <h1>
          Welcome!
        </h1>
        <span>Browse to find events...</span>
        {
          data.map(category => (
            <a
              key={ category.id }
              href={`/events/${ category.id }`}
            >
              <h2>{ category.title }</h2>
              <Image width={999} height={999} src={ category.image } alt={ category.title } />
              <p>
                { category.description }
              </p>
            </a>
          ))
        }
      </main>
      <footer className={ styles.footer }>
        <p> {date} | Desenvolvido por Leonardo Diman</p>
      </footer>
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

// export async function getStaticProps() {
//   return {
//     props: {
//       title: 'Welcome!',
//       subtitle: 'Browse to find events'
//     }
//   }
// }