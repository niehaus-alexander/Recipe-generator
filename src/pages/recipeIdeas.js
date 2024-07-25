import CardList from "@/components/CardList";

const recipeIdeasArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const recipeIdeas = () => {
  return <CardList recipes={recipeIdeasArray} />;
};

export default recipeIdeas;
