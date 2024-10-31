import styles from './styles/Aside.module.scss'

const Aside = () => {
  return (
    <aside className={styles.sidebar}>
      <span className={styles.sidebar_aside}>Aside</span>
      <span className={styles.sidebar_aside}>Bside</span>
    </aside>
  )
}

export default Aside
