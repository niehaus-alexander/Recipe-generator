import CardList from "@/components/CardList";
import { useState } from "react";
import useSWR from "swr";

const RecipeIdeas = ({ onToggleFavorites, favoriteRecipes }) => {
  const [area, setArea] = useState("Canadian");
  const { data, error, isLoading, isValidating } = useSWR(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const recipeFetchData = data.meals.map((meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`.trim()
        );
      }
    }

    return {
      name: meal.strMeal,
      id: meal.idMeal,
      cuisine: area,
      ingredients: ingredients.join(", "),
      preparation: meal.strInstructions,
      isFetched: true,
    };
  });

  return (
    <div className="w-full">
      <CardList
        favoriteRecipes={favoriteRecipes}
        onToggleFavorites={onToggleFavorites}
        recipes={recipeFetchData}
      />
    </div>
  );
};

export default RecipeIdeas;
