import CardList from "@/components/CardList";

const recipeFavorites = [];

const myRecipes = () => {
  return <CardList recipes={recipeFavorites} />;
};

export default myRecipes;
