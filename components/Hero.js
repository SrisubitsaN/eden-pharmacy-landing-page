import Image from "next/image";
import styles from "../styles/Head.module.css";

const Head = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        {/* Left Content - Text */}
        <div className={styles.textSection}>
          <h1>
            <span className={styles.highlight}>Essential Vitamins</span>
          </h1>
          <p className={styles.subTitle}>Online Medical Supplies</p>
          <p className={styles.description}>Get Your Vitamins & Minerals</p>
          <button className={styles.exploreButton}>Explore</button>
        </div>

        {/* Center Content - Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/probiotics.png"
            alt="Probiotics Bottle"
            width={300}
            height={300}
            className={styles.heroImage}
          />
        </div>

        {/* Right Content - Features */}
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>💊</span>
            </div>
            <h3>Vitamins</h3>
            <p>Increased vitamins and minerals in your diet</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>⚖️</span>
            </div>
            <h3>Weight Loss</h3>
            <p>Find scientifically proven solutions</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>🍎</span>
            </div>
            <h3>Functional Foods</h3>
            <p>From protein powders to baby formula</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Head;