import InnerHeader from '@component/components/innerHeader/InnerHeader';
import styles from '@component/styles/events/Events.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";

const EventsPage = ({ data }) => {
  return (
    <>
      <InnerHeader className={ styles.header } title="Events" />
      <main className={ styles.main }>
        <section>
          {
            data.map(ev => (
              <Link key={ ev.id } href={`/events/${ ev.id }`}>
                <h2>{ ev.title }</h2>
                <Image width={999} height={999} src={ ev.image } alt={ ev.title } />
              </Link>
            ))
          }
        </section>
        <Link href='/'>
          <BsArrowLeftShort size={'2em'}/>
          <span>
            Home
          </span>
        </Link>
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