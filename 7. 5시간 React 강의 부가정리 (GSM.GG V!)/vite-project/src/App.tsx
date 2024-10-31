import { BrowserRouter } from 'react-router-dom'
import styles from './App.module.scss'

import Header from './components/Header'
import Aside from './components/Aside'
import Main from './components/Main'

function App() {

  return (
    <BrowserRouter>
      <div className={styles.page}>
        <Header />
        <Aside />
        <Main />
        {/* 푸터 */}
      </div>
    </BrowserRouter>
  )
}
export default App
