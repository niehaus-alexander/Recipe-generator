import CardList from "@/components/CardList";
import recipeData from "@/lib/recipeData";

const recipeIdeas = () => {
  return <CardList recipes={recipeData} />;
};

export default recipeIdeas;
