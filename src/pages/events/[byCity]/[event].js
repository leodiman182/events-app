import styles from '@component/styles/AboutUs.module.css';

const EventPage = ({ event }) => {
  const { city, description, id, image, title, emails_registered } = event;

  return (
    <>
      <header className={ styles.header }>
        <h2>{ title }</h2>
      </header>
      <main className={ styles.main }>
        <img src={image} alt={title} />
        <h2>{ title }</h2>
        <p>{ description }</p>
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
  const { allEvents } = await import('../../../data/data.json');
  const eventId = context.params.event;

  const event = allEvents.find(ev => ev.id === eventId);
  
  return {
    props: {
      event
    }
  }
}