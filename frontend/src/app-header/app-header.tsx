import styles from './app-header.module.css';
import { Link, NavLink } from 'react-router-dom';

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.linkBox}>
          <li>
            <h1 className={styles.logo}>Логотип</h1>
          </li>
          <li>
            <p className={styles.linkProfile}>Личный кабинет</p>
          </li>
        </ul>

      </nav>
    </header>
  )
}