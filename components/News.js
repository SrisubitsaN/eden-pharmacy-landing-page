import Image from 'next/image';
import styles from '../styles/News.module.css';

export default function News() {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>OUR BLOGS</h3>
      <h2 className={styles.title}>Latest News</h2>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.date}>20 APR</div>
            <div className={styles.imageWrapper}>
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={300}
                height={200}
                style={{ objectFit: "cover" }} // Modern way to handle object-fit
                className={styles.image}
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
