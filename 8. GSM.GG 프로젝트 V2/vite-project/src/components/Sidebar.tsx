import styles from './styles/Sidebar.module.scss'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <input className={styles.sidebar_input} type='checkbox' />
      <div className={styles.sidebar_content}>
        Sidebar
      </div>
    </aside>
  )
}

export default Sidebar