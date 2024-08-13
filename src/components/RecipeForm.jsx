const RecipeForm = () => {
  return (
    <form className="border border-solid flex flex-col justify-center items-center gap-2 m-6 p-6 rounded-md">
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
    </form>
  );
};

export default RecipeForm;
