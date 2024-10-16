import CardList from "@/components/CardList";
import RecipeForm from "@/components/RecipeForm";

export default function CreatorPage({
  onSubmit,
  onDeleteRecipe,
  createdRecipes,
  onToggleFavorites,
  favoriteRecipes,
}) {
  console.log(createdRecipes);

  return (
    <div className="w-full bg-base-200">
      <RecipeForm onSubmit={onSubmit} />
      <CardList
        favoriteRecipes={favoriteRecipes}
        recipes={createdRecipes}
        onDeleteRecipe={onDeleteRecipe}
        onToggleFavorites={onToggleFavorites}
      />
    </div>
  );
}
