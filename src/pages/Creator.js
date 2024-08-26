import CardList from "@/components/CardList";
import RecipeForm from "@/components/RecipeForm";

const Creator = ({
  onSubmit,
  onDeleteRecipe,
  createdRecipes,
  onToggleFavorites,
  favoriteRecipes,
}) => {
  return (
    <div className="w-full">
      <RecipeForm onSubmit={onSubmit} />
      <CardList
        favoriteRecipes={favoriteRecipes}
        recipes={createdRecipes}
        onDeleteRecipe={onDeleteRecipe}
        onToggleFavorites={onToggleFavorites}
      />
    </div>
  );
};

export default Creator;
