import AreaFilter from "@/components/AreaFilter";
import CardList from "@/components/CardList";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

export default function InspirationPage({
  onToggleFavorites,
  favoriteRecipes,
}) {
  const [selectedCuisine, setSelectedCuisine] = useLocalStorageState(
    "selectedCuisine",
    { defaultValue: "Italian" }
  );
  const { data, error, isLoading, isValidating } = useSWR(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCuisine}`
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
      cuisine: selectedCuisine,
      ingredients: ingredients.join(", "),
      preparation: meal.strInstructions,
      isFetched: true,
    };
  });

  function handleCuisineFilter(event) {
    setSelectedCuisine(event.target.value);
  }

  return (
    <div className="w-full bg-base-200">
      <AreaFilter
        selectedCuisine={selectedCuisine}
        onCuisineFilter={handleCuisineFilter}
      />
      <CardList
        favoriteRecipes={favoriteRecipes}
        onToggleFavorites={onToggleFavorites}
        recipes={recipeFetchData}
      />
    </div>
  );
}
