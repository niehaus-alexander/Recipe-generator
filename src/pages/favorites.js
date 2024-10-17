import CardList from "@/components/CardList";

export default function FavoritesPage({ favoriteRecipes, onToggleFavorites }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-base-200">
      <h1 className="text-2xl font-semibold mt-6">Your Favorite Recipes:</h1>
      {favoriteRecipes.length > 0 ? (
        <CardList
          recipes={favoriteRecipes}
          onToggleFavorites={onToggleFavorites}
          favoriteRecipes={favoriteRecipes}
        />
      ) : (
        <h2 className="text-lg text-center m-6 px-20">
          ...seems like you don't have any favorites yet. Go to Creator or
          Inspiration to add recipes to your favorites by clicking on the star.
        </h2>
      )}
    </div>
  );
}
