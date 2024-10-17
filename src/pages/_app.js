import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { nanoid } from "nanoid";
import useLocalStorageState from "use-local-storage-state";
import { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [favoriteRecipes, setFavoriteRecipes] = useLocalStorageState(
    "favoriteRecipes",
    { defaultValue: [] }
  );

  const [createdRecipes, setCreatedRecipes] = useLocalStorageState(
    "createdRecipes",
    {
      defaultValue: [],
    }
  );
  // add and remove recipes to favoritesRecipes state
  function handleToggleFavorites(data) {
    setFavoriteRecipes((prevFavoriteRecipes) => {
      const exists = prevFavoriteRecipes.some(
        (recipe) => recipe.id === data.id
      );
      if (exists) {
        return prevFavoriteRecipes.filter((recipe) => recipe.id !== data.id);
      } else {
        return [...prevFavoriteRecipes, data];
      }
    });
  }
  // remove recipes from created- and favoriteRecipes
  function handleDeleteRecipe(id) {
    setCreatedRecipes((prevCreatedRecipes) =>
      prevCreatedRecipes.filter((recipe) => recipe.id !== id)
    );
    setFavoriteRecipes((prevFavoriteRecipes) =>
      prevFavoriteRecipes.filter((recipe) => recipe.id !== id)
    );
  }

  // __________HANDLE SUBMIT______________________

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.timeInMinutes) {
      data.timeInMinutes = parseInt(
        data.timeInMinutes.replace(/[^0-9]/g, ""),
        10
      );
    }

    const newRecipe = {
      id: nanoid(),

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
  // ______________END HANDLE SUBMIT

  // handle editing of existing recipe
  function handleUpdateRecipe(updatedRecipe) {
    setCreatedRecipes((prevCreatedRecipes) =>
      prevCreatedRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  }

  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component
          {...pageProps}
          onUpdateRecipe={handleUpdateRecipe}
          onSubmit={handleSubmit}
          createdRecipes={createdRecipes}
          onDeleteRecipe={handleDeleteRecipe}
          onToggleFavorites={handleToggleFavorites}
          favoriteRecipes={favoriteRecipes}
        />
      </Layout>
    </SWRConfig>
  );
}
