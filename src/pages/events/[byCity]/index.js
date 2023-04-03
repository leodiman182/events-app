import styles from '@component/styles/events/EventsByCity.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";

const EventsByCityPage = ({ filteredEvents, title }) => {

  return (
    <>
      <header className={ styles.header }>
        <h2>{ title }</h2>
      </header>
      <main className={ styles.main }>
        <Link href='/events'>
          <BsArrowLeftShort size={'2em'}/>
          <span>
            Events
          </span>
        </Link>
        <section>
          {
            filteredEvents.map(ev => (
              <Link key={ ev.id } href={`/events/${ev.city}/${ev.id}`}>
                <Image width={999} height={999} src={ ev.image } alt={ ev.title } />
                <h2>{ ev.title }</h2>              
              </Link>
            ))
          }
        </section>
      </main>
    </>
  )
}

export default EventsByCityPage;

// CRIANDO PATHS PARA TODOS OS IDS DE CIDADES
export async function getStaticPaths() {
  const { events_by_city } = await import('../../../data/data.json');

  const allPaths = events_by_city.map(ev => {
    return {
      params: {
        byCity: ev.id,
      }
    }
  })

  return {
    paths: allPaths, 
    fallback: false,
  }
}

// PASSANDO COMO PROPS DATA FILTRADA ATRAVÉS DO CONTEXT, QUE POSSUI O PARAMETRO O PATH DA URL
export async function getStaticProps(context) {
  const { allEvents, events_by_city } = await import('../../../data/data.json');

  const id = context?.params.byCity

  const cityTitle = events_by_city
    .filter(ev => ev.id === id)
    .map(ev => ev.title);

  const eventsPerCity = allEvents
    .filter(ev => ev.city === id)
    .map(ev => ev);

  return {
    props: {
      title: cityTitle,
      filteredEvents: eventsPerCity,
    }
  }
}