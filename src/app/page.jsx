import Image from "next/image"
import Hero from '/public/images/Hero.svg'
import styles from './page.module.css'
export default function Home() {
  return (
   <div className={styles.container}>
    <div className={styles.col}>
      <h1 className={styles.title}>Your Best Online shop destination!</h1>
      <p className={styles.description}>Discover a world od endless shopping possibilities at our online store. Browse, choose, and order your favorite products from the comfort of your home.</p>
      <button className={styles.button}>Shop Now</button>
    </div>
    <div className={styles.col}>
      <Image className={styles.image} src={Hero} alt="Hexa Shop" />
    </div>
   </div>
  )
}
