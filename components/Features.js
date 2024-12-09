import styles from '../styles/Features.module.css';

const features = [
  { icon: '🧪', heading: 'Clinically Studied', text: 'All products that we offer have undergone lab and safety tests.' },
  { icon: '🥗', heading: 'Vegetarian Friendly', text: 'We have a wide selection of vegetarian products to meet your needs.' },
  { icon: '📍', heading: 'Made in India', text: 'Shop local and explore health products made right here in India.' },
  { icon: '🚚', heading: 'Free Shipping', text: 'We deliver to your door with no shipping costs on your orders.' },
  { icon: '😃', heading: 'No Risk', text: 'We ensure all products are safe and within their use-by date.' },
  { icon: '🌱', heading: 'GMO Free', text: 'Natural, no modified products and derivatives for those who need it.' },
];

const Features = () => (
  <section className={styles.features}>z
    {features.map((feature, index) => (
      <div key={index} className={styles.feature}>
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>{feature.icon}</span>
        </div>
        <h2>{feature.heading}</h2>
        <p>{feature.text}</p>
      </div>
    ))}
  </section>
);

export default Features;