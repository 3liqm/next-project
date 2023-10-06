import styles from './page.module.css'
import Image from 'next/image';

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
 
}


async function post({params}) {

  const product = await getData(params.id)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image 
          className={styles.image}
          src={product.thumbnail}
          alt={product.title}
          fill={true}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map(image => (
            <Image 
            src={image}
            alt={product.title}
            width={200}
            height={200}
            key={product.id}
            />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          corrupti excepturi repudiandae ex saepe libero repellat, deserunt
          dolore fuga? Aut facere eveniet laborum. Quis provident nisi ex
          molestias temporibus praesentium. Nihil quas illum sequi! Assumenda
          aliquid consequatur possimus eius, vitae eaque quas. Adipisci debitis
          accusantium distinctio illum voluptatibus enim! Beatae.
        </p>
      </div>
    </div>
  );
};

export default post;
