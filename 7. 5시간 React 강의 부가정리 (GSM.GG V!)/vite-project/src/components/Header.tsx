import { Link } from 'react-router-dom'
import styles from './styles/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.header_title}>GSM.GG</h2>
      <nav className={styles.header_navigation}>
        <Link to="/" className={styles.header_navigation_Link}>챔피언</Link>
        <Link to="/summoner" className={styles.header_navigation_Link}>소환사</Link>
      </nav>
    </header>
  )
}

export default Header
