import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        {/* InfoBox 1: Phone Number */}
        <div className={styles.infoBox}>
          <div className={styles.icon}>📞</div>
          <p className={styles.text}>Phone Number</p>
          <p className={styles.detail}>+974 3118 1843</p>
        </div>

        {/* InfoBox 2: Email Address */}
        <div className={styles.infoBox}>
          <div className={styles.icon}>📧</div>
          <p className={styles.text}>Email Address</p>
          <p className={styles.detail}>Elbritechq@gmail.com</p>
        </div>

        {/* InfoBox 3: Office Location */}
        <div className={styles.infoBox}>
          <div className={styles.icon}>📍</div>
          <p className={styles.text}>Office Location</p>
          <p className={styles.detail}>Ambassador Street, Zone 61</p>
        </div>
      </div>

      {/* New Block for Logo and Description */}
      <div className={styles.logoDescriptionBlock}>
        <img src="/logo.png" alt="Elbrit Logo" className={styles.logo} />
        <p className={styles.description}>
          Your health, physical and emotional well-being is important to us. 
          We are always by your side and have made it even easier for you to find the necessary vitamins.
        </p>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © Elbrit Life Sciences Private Limited, C-20, BKC, G Block, Mumbai 400051
        </p>
      </div>
    </footer>
  );
};

export default Footer;