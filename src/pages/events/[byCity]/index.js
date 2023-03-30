import styles from '@component/styles/events/EventsByCity.module.css';

const EventsByCityPage = () => {
  return (
    <>
      <header className={ styles.header }>
        <h2>Events in London</h2>
      </header>
      <main className={ styles.main }>
        <ul>
          <a href="/events/london/event1">Event 1</a>
          <a href="/events/london/event2">Event 2</a>
          <a href="/events/london/event3">Event 3</a>
          <a href="/events/london/event4">Event 4</a>
        </ul>
      </main>
    </>
  )
}

export default EventsByCityPage;