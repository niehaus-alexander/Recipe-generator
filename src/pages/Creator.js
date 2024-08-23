import CardList from "@/components/CardList";
import RecipeForm from "@/components/RecipeForm";

const Creator = ({
  onSubmit,
  onDeleteRecipe,
  createdRecipes,
  onToggleFavorites,
}) => {
  return (
    <div className="w-full">
      <RecipeForm onSubmit={onSubmit} />
      <CardList
        recipes={createdRecipes}
        onDeleteRecipe={onDeleteRecipe}
        onToggleFavorites={onToggleFavorites}
      />
    </div>
  );
};

export default Creator;
