import { useState } from "react";
import Card from "@/components/Card";

export default function RandomRecipePickerPage({
  favoriteRecipes,
  onToggleFavorites,
}) {
  const [randomFavoritesRecipe, setRandomFavoritesRecipe] = useState(null);

  function handlePickRandomFavoritesRecipe() {
    if (favoriteRecipes.length > 0) {
      const randomIndex = Math.floor(Math.random() * favoriteRecipes.length);
      setRandomFavoritesRecipe(favoriteRecipes[randomIndex]);
    }
  }

  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-lg m-6 text-center">
          Don't feel like thinking about what to cook? On this page we randomly
          pick you a recipe from your{" "}
          <span className="font-bold">favorites</span> and from the{" "}
          <a
            href="https://www.themealdb.com/api.php"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 hover:underline"
          >
            mealDB database
          </a>
          .
        </h2>
        <div className="w-full p-6 flex justify-center items-center flex-col mb-10">
          <h2 className="text-center font-semibold text-3xl mb-10">
            Favorites
          </h2>
          <button
            onClick={handlePickRandomFavoritesRecipe}
            className="btn btn-secondary mb-6"
          >
            Pick random recipe!
          </button>
          {randomFavoritesRecipe && (
            <Card
              onToggleFavorites={onToggleFavorites}
              data={randomFavoritesRecipe}
              favoriteRecipes={favoriteRecipes}
            />
          )}
        </div>
        <div className="w-full p-6 flex justify-center items-center flex-col ">
          <h2 className="text-center font-semibold text-3xl mb-10">
            MealDB Database
          </h2>
          <button className="btn btn-secondary">Pick random recipe!</button>
        </div>
      </div>
    </div>
  );
}
