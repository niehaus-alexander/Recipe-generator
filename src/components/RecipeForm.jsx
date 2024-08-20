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
        <div className="border border-solid border-primary rounded-[2rem] p-4 w-full max-w-xs">
          <label className="block mb-2">Difficulty</label>
          <input
            type="range"
            min={0}
            max="100"
            className="range range-primary w-full max-w-xs"
            step="50"
          />

          <div className="flex w-full max-w-xs justify-between px-2 text-xs">
            <span>easy</span>
            <span>moderat</span>
            <span>hard</span>
          </div>
        </div>
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
      </form>
    </div>
  );
};

export default RecipeForm;
