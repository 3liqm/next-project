
import Link from "next/link"
import styles from "./Navbar.module.css"
import { links } from "./data"
import Button from "../elements/Buuton/Button"
import Logo from "../elements/logo/Logo"
import DarkMode from "../DarkModeToggle/DarkMode"
const Navbar = () => {
  return (
    <div className={styles.container}>
     <Logo />
        <div className={styles.links}>
          <DarkMode />
            {links.map((link) => (
                   <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
                  
            ) )}
            <Button />
        </div>
    </div>
  )
}

export default Navbar
