import styles from '@component/styles/AboutUs.module.css'
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";

const AboutUsPage = () => {
  return (
    <>
      <header className={ styles.header }>
        <h2>About Us</h2>
      </header>
      <main className={ styles.main }>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime est deserunt dolores atque assumenda libero dicta iusto molestiae voluptate ut, enim dignissimos velit possimus excepturi cum rerum ducimus quibusdam in. 
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed a corrupti soluta necessitatibus, debitis eum repudiandae quia labore! Perferendis similique autem nesciunt distinctio excepturi dolore, repellendus ad inventore laborum aspernatur?
        </p>
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

export default AboutUsPage;