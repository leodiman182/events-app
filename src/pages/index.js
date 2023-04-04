import styles from '@component/styles/home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home({ data }) {
  return (
    <>
      <div className={ styles.header }>
        <h2>
          Welcome!
        </h2>
        <span>Browse to find events...</span>
      </div>
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