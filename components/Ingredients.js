'use strict';

import React from 'react';
import { useRouter } from 'next/router';  // Import useRouter from next/router
import styles from '../styles/Ingredients.module.css';

const Ingredients = () => {
  const router = useRouter();  // Initialize useRouter

  const handleSeeMore = (ingredientId) => {
    router.push('/ingredients/${ingredientId}');  // Navigate to the dynamic page
  };

  return (
    <div className={styles.container}>
      <div className={styles.ingredientsBlock}>
        <div className={styles.ingredients}>
          <div className={styles.header}>
            <h3>INGREDIENTS</h3>
            <h1>Better Ingredients</h1>
            <p>Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!</p>
          </div>
          <div className={styles.ingredient}>
            <img src="/vitaminc.jpeg" alt="Vitamin C" />
            <h2>Vitamin C</h2>
            <p>Vitamin C as ascorbic acid</p>
            <button className={styles.seeMore} onClick={() => handleSeeMore('vitaminC')}>See More</button>
          </div>
          <div className={styles.ingredient}>
            <img src="/vitaminb3.jpeg" alt="Vitamin B3" />
            <h2>Vitamin B3</h2>
            <p>Niacin for healthy gut and skin</p>
            <button className={styles.seeMore} onClick={() => handleSeeMore('vitaminB3')}>See More</button>
          </div>
        </div>
      </div>
      <div className={styles.ingredientsBlock}>
        <div className={styles.ingredients}>
          <div className={styles.ingredient}>
            <img src="/magnesium.jpeg" alt="Magnesium" />
            <h2>Magnesium</h2>
            <p>Boost energy and support muscle function</p>
            <button className={styles.seeMore} onClick={() => handleSeeMore('magnesium')}>See More</button>
          </div>
          <div className={styles.ingredient}>
            <img src="/hyaluronicacid.jpeg" alt="Hyaluronic Acid" />
            <h2>Hyaluronic Acid</h2>
            <p>For smooth, supple and soft skin!</p>
            <button className={styles.seeMore} onClick={() => handleSeeMore('hyaluronicAcid')}>See More</button>
          </div>
          <div className={styles.ingredient}>
            <img src="/lactobacillus.jpeg" alt="Lactobacillus" />
            <h2>Lactobacillus</h2>
            <p>Invigorate your gut microbiome</p>
            <button className={styles.seeMore} onClick={() => handleSeeMore('lactobacillus')}>See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;