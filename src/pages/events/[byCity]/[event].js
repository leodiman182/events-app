import styles from '@component/styles/events/Event.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";

const EventPage = ({ event, goBackUrl }) => {
  const { city, description, image, title, emails_registered } = event;

  return (
    <>
      <header className={ styles.header }>
        <h2>{ title }</h2>
      </header>
      <main className={ styles.main }>
        <h2>{ title }</h2>
        <Image width={999} height={999} src={ image } alt={ title } />
        <p>{ description }</p>
        <Link href={`/events/${city}`}>
          <BsArrowLeftShort size={'2em'}/>
          <span>
            { goBackUrl }
          </span>
        </Link>
      </main>
    </>
  )
}

export default EventPage;

// CRIANDO PATHS PARA TODOS OS IDS DE CIDADES
export async function getStaticPaths() {
  const { allEvents } = await import('../../../data/data.json');
  const allPaths = allEvents.map(ev => {
    return {
      params: {
        byCity: ev.city,
        event: ev.id,
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false
  }
}

// PASSANDO COMO PROPS DATA FILTRADA ATRAVÉS DO CONTEXT, QUE POSSUI O PARAMETRO O PATH DA URL
export async function getStaticProps(context) {
  const { allEvents, events_by_city } = await import('../../../data/data.json');
  const eventId = context.params.event;
  const eventCity = context.params.byCity;

  const selectedCity = events_by_city.find(city => city.id === eventCity).title;

  const event = allEvents.find(ev => ev.id === eventId);
  
  return {
    props: {
      event,
      goBackUrl: selectedCity
    }
  }
}