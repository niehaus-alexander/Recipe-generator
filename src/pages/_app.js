import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { nanoid } from "nanoid";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [createdRecipes, setCreatedRecipes] = useLocalStorageState(
    "createdRecipes",
    {
      defaultValue: [],
    }
  );

  function handleToggleFavorites(id) {
    setCreatedRecipes((prevRecipes) => {
      const updatedRecipes = prevRecipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, isFavorite: !recipe.isFavorite }
          : recipe
      );

      const favorites = updatedRecipes.filter((recipe) => recipe.isFavorite);
      setFavoriteRecipes(favorites);

      return updatedRecipes;
    });
  }

  function handleDeleteRecipe(id) {
    setCreatedRecipes((prevCreatedRecipes) =>
      prevCreatedRecipes.filter((recipe) => recipe.id !== id)
    );
    setFavoriteRecipes((prevFavoriteRecipes) =>
      prevFavoriteRecipes.filter((recipe) => recipe.id !== id)
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // turn duration string into number

    if (data.timeInMinutes) {
      data.timeInMinutes = parseInt(
        data.timeInMinutes.replace(/[^0-9]/g, ""),
        10
      );
    }

    const newRecipe = {
      id: nanoid(),
      isFavorite: false,
      creationDate: Date.now(),
      ownRecipe: true,
      ...data,
    };
    setCreatedRecipes((prevRecipes) => {
      const updatedRecipes = [...prevRecipes, newRecipe];
      console.log(updatedRecipes);

      return updatedRecipes;
    });
    event.target.reset();
  }
  return (
    <Layout>
      <Component
        {...pageProps}
        onSubmit={handleSubmit}
        createdRecipes={createdRecipes}
        onDeleteRecipe={handleDeleteRecipe}
        onToggleFavorites={handleToggleFavorites}
        favoriteRecipes={favoriteRecipes}
      />
    </Layout>
  );
}
