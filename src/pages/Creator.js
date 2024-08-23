import CardList from "@/components/CardList";
import RecipeForm from "@/components/RecipeForm";
import { nanoid } from "nanoid";
import useLocalStorageState from "use-local-storage-state";

const Creator = () => {
  const [createdRecipes, setCreatedRecipes] = useLocalStorageState(
    "createdRecipes",
    {
      defaultValue: [],
    }
  );

  function handleDeleteRecipe(id) {
    setCreatedRecipes((prevCreatedRecipes) =>
      prevCreatedRecipes.filter((recipe) => recipe.id !== id)
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
    <div className="w-full">
      <RecipeForm onSubmit={handleSubmit} />
      <CardList recipes={createdRecipes} onDeleteRecipe={handleDeleteRecipe} />
    </div>
  );
};

export default Creator;
