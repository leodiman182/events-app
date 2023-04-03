import styles from '@component/styles/header.module.css';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={ styles.header }>
      <nav>          
        <Link href="/">
          Home   
        </Link>
        <Link href="/events">
          Events        
        </Link>
        <Link href="/about-us">
          About us         
        </Link>
      </nav>
    </header>
  )
}