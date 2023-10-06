"use client";
import { useContext } from 'react'
import styles from './DarkMode.module.css'
import { ThemeContext } from '@/Context/themeContext'
const DarkMode = () => {
    const {mode, toggle} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🌚</div>
        <div className={styles.switcher}
        style={mode === "light" ? {left:"2px"} : {right:"2px"}}
        />
      
    </div>
  )
}

export default DarkMode
