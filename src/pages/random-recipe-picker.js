import { useState } from "react";
import Card from "@/components/Card";
import useSWR from "swr";

export default function RandomRecipePickerPage({
  favoriteRecipes,
  onToggleFavorites,
}) {
  const [randomFavoritesRecipe, setRandomFavoritesRecipe] = useState(null);

  const { data, error, isLoading, isValidating, mutate } = useSWR(
    `https://www.themealdb.com/api/json/v1/1/random.php`,
    {
      revalidateOnMount: false,
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );

  const randomFetchedRecipe =
    data && data.meals && data.meals.length > 0
      ? {
          name: data.meals[0].strMeal,
          id: data.meals[0].idMeal,
          cuisine: data.meals[0].strArea,
          ingredients: data.meals[0].strIngredient1
            ? Object.keys(data.meals[0])
                .filter((key) => key.startsWith("strIngredient"))
                .map((key) => data.meals[0][key])
                .filter(Boolean)
                .join(", ")
            : "",
          preparation: data.meals[0].strInstructions,
          isFetched: true,
        }
      : null;

  function handleFetchRandomRecipe() {
    mutate();
    console.log(randomFetchedRecipe);
  }

  function handlePickRandomFavoritesRecipe() {
    if (favoriteRecipes.length > 0) {
      const randomIndex = Math.floor(Math.random() * favoriteRecipes.length);
      setRandomFavoritesRecipe(favoriteRecipes[randomIndex]);
    }
  }

  return (
    <div className="w-full min-h-screen bg-base-200">
      <div className="max-w-screen-lg mx-auto px-4 py-10">
        <h2 className="text-xl pt-6 text-center text-gray-800">
          Don't feel like thinking about what to cook? On this page we randomly
          pick a recipe from your <span className="font-bold">favorites</span>{" "}
          and from the{" "}
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

        <div className="w-full p-6 flex justify-center items-center flex-col mb-6">
          <h2 className="text-center font-semibold text-3xl mb-10">
            Favorites
          </h2>

          {favoriteRecipes.length === 0 ? (
            <p className="text-center text-gray-500">
              You have no favorite recipes. Go to Creator or Inspiration to add
              some by clicking on the star!
            </p>
          ) : (
            <>
              <button
                onClick={handlePickRandomFavoritesRecipe}
                className="btn btn-secondary mb-6 bg-primary hover:bg-secondary text-white rounded-lg shadow-md transition-transform transform hover:scale-105"
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
            </>
          )}
        </div>

        <div className="w-full p-6 flex justify-center items-center flex-col">
          <h2 className="text-center font-semibold text-3xl mb-10">
            MealDB Database
          </h2>
          <button
            onClick={handleFetchRandomRecipe}
            className="btn btn-secondary mb-6 bg-primary hover:bg-secondary text-white rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Pick random recipe!
          </button>
          {isLoading && (
            <div className="flex justify-center items-center">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          )}
          {error && (
            <p className="text-red-600 font-semibold">Error loading recipe.</p>
          )}
          {randomFetchedRecipe && (
            <Card
              onToggleFavorites={onToggleFavorites}
              data={randomFetchedRecipe}
              favoriteRecipes={favoriteRecipes}
            />
          )}
        </div>
      </div>
    </div>
  );
}
