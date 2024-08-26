import CardList from "@/components/CardList";
import { useState } from "react";
import useSWR from "swr";

const RecipeIdeas = ({ onToggleFavorites }) => {
  const [area, setArea] = useState("Canadian");
  const { data, error, isLoading, isValidating } = useSWR(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const recipeFetchData = data.meals.map((meal) => {
    // Gather ingredients into a single string
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`.trim()
        );
      }
    }

    return {
      name: meal.strMeal, // Recipe name
      id: meal.idMeal, // Recipe ID
      cuisine: area, // Recipe area (cuisine)
      ingredients: ingredients.join(", "), // All ingredients joined in a single string
      preparation: meal.strInstructions, // Preparation instructions
      isFetched: true,
      isFavorite: false,
    };
  });

  console.log(recipeFetchData);

  return (
    <div className="w-full">
      <CardList
        onToggleFavorites={onToggleFavorites}
        recipes={recipeFetchData}
      />
    </div>
  );
};

export default RecipeIdeas;
