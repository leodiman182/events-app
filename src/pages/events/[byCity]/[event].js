import styles from '@component/styles/AboutUs.module.css';

const EventPage = () => {
  return (
    <>
      <header className={ styles.header }>
        <h2>Our Single Event</h2>
      </header>

      <main className={ styles.main }>
      </main>
    </>
  )
}

export default EventPage;

// CRIANDO PATHS PARA TODOS OS IDS DE CIDADES
// export async function getStaticPaths() {
//   const { allEvents, events_by_city } = await import('../../../data/data.json');

//   const allCityPaths = events_by_city.map(ev => {
//     return {
//       params: {
//         byCity: ev.id.toString(),
//       }
//     }
//   })

//   const allEventsPaths = allEvents.map(ev => {
//     return {
//       params: {
//         event: ev.id.toString(),
//       }
//     }
//   })



  
//   return {
//     paths: `${allCityPaths}/${allEventsPaths}`, 
//     fallback: false,
//   }
// }

// PASSANDO COMO PROPS DATA FILTRADA ATRAVÉS DO CONTEXT, QUE POSSUI O PARAMETRO O PATH DA URL
// export async function getStaticProps(context) {
  
//   return {
//     props: {
      
//     }
//   }
// }