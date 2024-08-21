const RecipeForm = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex justify-center items-center">
      <form className="border border-solid flex flex-col justify-center items-center w-1/2 gap-2 m-6 p-6 rounded-md">
        <legend className="text-neutral text-lg font-semibold">
          Add a new recipe:
        </legend>
        <input
          type="text"
          placeholder="Recipe Name"
          className="input input-bordered input-primary w-full max-w-xs"
          required
        />

        <input
          type="text"
          placeholder="Cuisine"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <select className="select select-primary w-full max-w-xs">
          <option disabled selected>
            Difficulty
          </option>
          <option>easy</option>
          <option>moderate</option>
          <option>hard</option>
        </select>

        <select className="select select-primary w-full max-w-xs">
          <option disabled selected>
            Duration
          </option>
          <option>~ 15 min.</option>
          <option>~ 30 min.</option>
          <option>~ 45 min.</option>
          <option>~ 60 min.</option>
          <option>~ 90 min.</option>
          <option>~ 120 min.</option>
        </select>
        <div className="w-full max-w-xs">
          <h3 className="text-lg font-semibold mb-4 ">Ingredients:</h3>
          <textarea
            rows={4}
            className="textarea textarea-primary w-full max-w-xs"
            placeholder={`- onions\n- garlic\n- tomatos`}
          ></textarea>
        </div>
        <div className="w-full max-w-xs">
          <h3 className="text-lg font-semibold mb-4 ">Preparation:</h3>
          <textarea
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
