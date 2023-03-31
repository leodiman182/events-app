import styles from '@component/styles/events/Events.module.css';
import Image from 'next/image';

const EventsPage = ({ data }) => {
  return (
    <>
      <header className={ styles.header }>
        <h2>Events</h2>
      </header>
      <main className={ styles.main }>
        {
          data.map(ev => (
            <Link key={ ev.id } href={`/events/${ ev.id }`}>
              <h2>{ ev.title }</h2>
              <Image width={999} height={999} src={ ev.image } alt={ ev.title } />
            </Link>
          ))
        }
      </main>
    </>
  )
}

export default EventsPage;

export async function getStaticProps() {
  const { events_by_city } = await import('../../data/data.json');

  return {
    props: {
      data: events_by_city
    },
  }
}