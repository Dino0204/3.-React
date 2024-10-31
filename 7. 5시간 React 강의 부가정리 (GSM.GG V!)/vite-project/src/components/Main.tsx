import { Route, Routes } from "react-router-dom"
import styles from './styles/Main.module.scss'

import { ChampionPage } from "../pages/Champion/ChampionPage"
import { Summoner } from "../pages/Summoner/Summoner"

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<ChampionPage />} />
        <Route path='/summoner' element={<Summoner />} />
      </Routes>
    </main>
  )
}

export default Main
