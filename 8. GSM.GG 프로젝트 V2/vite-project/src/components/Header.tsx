import styles from './styles/Header.module.scss'

function Header() {

  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Header</h1>
      <nav className={styles.header_nav}>
        <span>ExamLink1</span>
        <span>ExamLink2</span>
        <span>ExamLink3</span>
      </nav>
    </header>
  )
}

export default Header