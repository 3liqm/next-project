import styles from './Footer.module.css'
import Image from 'next/image'
import {social_media} from './data'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 HEXASHOP. All rights reserved.</div>
      <div className={styles.social}>
        {
            social_media.map(media =>
            <Image 
            key={media.id}
            src={`/images/icons/${media.name}.png`}
            width={20}
            height={20}
            className={styles.icon}
            alt='HEXASHOP `${mesia.name}` link '
            /> )
        }
      
      
      </div>
    </div>
  )
}

export default Footer
