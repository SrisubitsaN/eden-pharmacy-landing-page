// pages/ingredients/[id].js
import { useRouter } from 'next/router';

const IngredientDetail = () => {
  const router = useRouter();
  const { id } = router.query;  // Get the dynamic id (ingredient name or ID)

  // Dummy data for ingredients (can be replaced with actual data or API)
  const ingredientDetails = {
    vitaminC: {
      name: 'Vitamin C',
      description: 'Vitamin C (ascorbic acid) is essential for the growth and repair of tissues in the body.',
      benefits: 'Boosts immune system, supports skin health, and promotes healing.',
    },
    vitaminB3: {
      name: 'Vitamin B3',
      description: 'Niacin helps with digestion, skin health, and nerve function.',
      benefits: 'Supports energy metabolism, promotes healthy skin, and aids in digestive health.',
    },
    magnesium: {
      name: 'Magnesium',
      description: 'Magnesium is a mineral that supports muscle and nerve function.',
      benefits: 'Boosts energy, helps with muscle function, and supports bone health.',
    },
    hyaluronicAcid: {
      name: 'Hyaluronic Acid',
      description: 'Hyaluronic acid is a compound that helps retain skin moisture.',
      benefits: 'Hydrates skin, reduces wrinkles, and promotes skin elasticity.',
    },
    lactobacillus: {
      name: 'Lactobacillus',
      description: 'Lactobacillus is a genus of bacteria that aids digestion and improves gut health.',
      benefits: 'Improves gut microbiome, boosts immunity, and aids digestion.',
    },
  };

  const ingredient = ingredientDetails[id];

  if (!ingredient) return <p>Ingredient not found</p>;

  return (
    <div>
      <h1>{ingredient.name}</h1>
      <p>{ingredient.description}</p>
      <h3>Benefits:</h3>
      <p>{ingredient.benefits}</p>
    </div>
  );
};

export default IngredientDetail;