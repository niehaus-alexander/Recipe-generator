import CardList from "@/components/CardList";

const myRecipesArray = [1, 2, 3, 4, 5];

const myRecipes = () => {
  return <CardList recipes={myRecipesArray} />;
};

export default myRecipes;
