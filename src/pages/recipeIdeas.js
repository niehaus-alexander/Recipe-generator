import CardList from "@/components/CardList";
import recipeData from "@/lib/recipeData";

const recipeIdeas = () => {
  return (
    <div className="h-screen w-full">
      <CardList recipes={recipeData} />
    </div>
  );
};

export default recipeIdeas;
