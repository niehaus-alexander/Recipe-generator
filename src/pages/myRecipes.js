import CardList from "@/components/CardList";

const recipeFavorites = [];

const myRecipes = () => {
  return (
    <div className="h-screen w-full">
      <CardList recipes={recipeFavorites} />
    </div>
  );
};

export default myRecipes;
