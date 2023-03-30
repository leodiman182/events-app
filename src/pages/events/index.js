import styles from '@component/styles/events/Events.module.css';

const AboutUs = () => {
  return (
    <>
      <header className={ styles.header }>
        <h2>Events</h2>
      </header>
      <main className={ styles.main }>
        <a href='/events/london'>
          <img src="" alt="" />
          <h2>Events in London</h2>
        </a>
        <a href='/events/sanfrancisco'>
          <img src="" alt="" />
          <h2>Events in San Francisco</h2>
        </a>
        <a href='/events/barcelona'>
          <img src="" alt="" />
          <h2>Events in Barcelona</h2>
        </a>
      </main>
    </>
  )
}

export default AboutUs;