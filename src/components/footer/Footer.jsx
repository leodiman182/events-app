import styles from '@component/styles/components/footer.module.css';

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className={ styles.footer }>
      <p> {date} | Desenvolvido por Leonardo Diman</p>
    </footer>
  )
}