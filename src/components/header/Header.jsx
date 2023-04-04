import styles from '@component/styles/components/header.module.css';
import Link from 'next/link';

export const Header = () => {
  const headerLinks = [
    {
      url: '/',
      value: 'HOME',
    },
    {
      url: '/events',
      value: 'EVENTS',
    },
    {
      url: '/about-us',
      value: 'ABOUT US',
    },
  ];

  return (
    <header className={ styles.header }>
      <nav>
        {
          headerLinks.map(link => (
            <Link key={ link.value } href={ link.url }>
              { link.value }   
            </Link>
          ))
        }
      </nav>
    </header>
  )
}