import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <img src="/logo.jpeg" alt="Eden Pharmacy Logo" className={styles.logo} width='150px'/>
  </header>
);

export default Header;