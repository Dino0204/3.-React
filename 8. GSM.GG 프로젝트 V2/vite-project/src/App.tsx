import styles from './App.module.scss'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
