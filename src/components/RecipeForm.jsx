import { useState } from "react";
import { nanoid } from "nanoid";

const RecipeForm = () => {
  const [createdRecipes, setCreatedRecipes] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newRecipe = { id: nanoid(), creationDate: Date.now(), ...data };
    setCreatedRecipes((prevRecipes) => {
      const updatedRecipes = [...prevRecipes, newRecipe];
      console.log(updatedRecipes);

      return updatedRecipes;
    });
  }

  return (
    <div className="max-w-screen-lg mx-auto flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border border-solid flex flex-col justify-center items-center w-2/3 gap-2 m-6 p-6 rounded-md"
      >
        <legend className="text-neutral text-lg font-semibold">
          Add a new recipe:
        </legend>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Recipe Name"
          className="input input-bordered input-primary w-full max-w-xs"
          required
        />

        <input
          name="cuisine"
          id="cuisine"
          type="text"
          placeholder="Cuisine"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <select
          defaultValue={"Difficulty"}
          className="select select-primary w-full max-w-xs"
          name="difficulty"
          id="difficulty"
        >
          <option disabled>Difficulty</option>
          <option>easy</option>
          <option>moderate</option>
          <option>hard</option>
        </select>

        <select
          defaultValue={"Duration"}
          className="select select-primary w-full max-w-xs"
          name="duration"
          id="duration"
        >
          <option disabled>Duration</option>
          <option>~ 15 min.</option>
          <option>~ 30 min.</option>
          <option>~ 45 min.</option>
          <option>~ 60 min.</option>
          <option>~ 90 min.</option>
          <option>~ 120 min.</option>
        </select>
        <select
          defaultValue={"Portions"}
          className="select select-primary w-full max-w-xs"
          name="portions"
          id="portions"
        >
          <option disabled>Portions</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>

        <div className="w-full max-w-xs">
          <h3 className="text-lg font-semibold mb-4 ">Ingredients:</h3>
          <textarea
            name="ingredients"
            id="ingredients"
            rows={4}
            className="textarea textarea-primary w-full max-w-xs"
            placeholder={`- onions\n- garlic\n- tomatos`}
          ></textarea>
        </div>
        <div className="w-full max-w-xs">
          <h3 className="text-lg font-semibold mb-4 ">Preparation:</h3>
          <textarea
            name="preparation"
            id="preparation"
            rows={4}
            className="textarea textarea-primary w-full max-w-xs"
            placeholder="1. Cut onions without crying..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Recipe!
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
