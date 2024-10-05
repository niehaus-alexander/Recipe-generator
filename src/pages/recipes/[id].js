import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function RecipeDetailsPage({ createdRecipes }) {
  const router = useRouter();
  const { id } = router.query;
  const [recipe, setRecipe] = useState(null);

  console.log(createdRecipes);

  useEffect(() => {
    if (id && createdRecipes) {
      const foundRecipe = createdRecipes.find((recipe) => recipe.id === id);
      if (foundRecipe) {
        setRecipe(foundRecipe);
      }
    }
  }, [id, createdRecipes]);

  const { data, error } = useSWR(
    recipe ? null : `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  function mapMealDBToRecipe(mealData) {
    if (!mealData) return null;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealData[`strIngredient${i}`];
      const measure = mealData[`strMeasure${i}`];

      // Only include if the ingredient exists
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure.trim()} ${ingredient.trim()}`); // Combine amount and ingredient
      }
    }

    return {
      name: mealData.strMeal,
      preparation: mealData.strInstructions,
      cuisine: mealData.strArea,
      ingredients: ingredients.join(", "), // Join ingredients with amounts into a string
    };
  }

  useEffect(() => {
    if (data && data.meals && data.meals.length > 0) {
      const mappedRecipe = mapMealDBToRecipe(data.meals[0]);
      setRecipe(mappedRecipe);
    }
  }, [data]);

  if (error) return <div>Failed to load the recipe</div>;
  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl p-6">
        <h2 className="card-title text-center text-3xl font-bold mb-4">
          {recipe.name}
        </h2>
        <div className="divider"></div>
        <p className="text-lg mb-2">
          <span className="font-semibold">Cuisine:</span> {recipe.cuisine}
        </p>
        {recipe.ownRecipe && (
          <p className="text-lg mb-2">
            <span className="font-semibold">Duration:</span>{" "}
            {recipe.timeInMinutes} minutes
          </p>
        )}
        {recipe.ownRecipe && (
          <p className="text-lg mb-2">
            <span className="font-semibold">Difficulty:</span>{" "}
            {recipe.difficulty}
          </p>
        )}
        {recipe.ownRecipe && (
          <p className="text-lg mb-2">
            <span className="font-semibold">Portions:</span> {recipe.portions}
          </p>
        )}
        <p className="text-lg mb-2">
          <span className="font-semibold">Ingredients:</span>{" "}
          {recipe.ingredients}
        </p>
        <p className="text-lg mb-4">
          <span className="font-semibold">Preparation:</span>{" "}
          {recipe.preparation}
        </p>
      </div>
    </div>
  );
}
