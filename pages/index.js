import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Ingredients from '../components/Ingredients';
import News from '../components/News';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Ingredients />
      <News />
      <Footer />
    </div>
  );
}