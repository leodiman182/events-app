import styles from '@component/styles/components/header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const Header = () => {
  const router = useRouter();

  const headerLinks = [
    {
      url: '/',
      value: 'Home',
    },
    {
      url: '/events',
      value: 'Events',
    },
    {
      url: '/about-us',
      value: 'About us',
    },
  ];

  useEffect(() => {
    console.log(router.pathname);
  }, [router.pathname])

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