const AreaFilter = ({ onCuisineFilter, selectedCuisine }) => {
  return (
    <div className="max-w-screen-lg mx-auto flex justify-center items-center">
      <form className="mt-6 w-full flex justify-center items-center">
        <select
          value={selectedCuisine}
          className="select select-primary w-80"
          name="cuisine"
          id="cuisine"
          onChange={onCuisineFilter}
        >
          <option disabled>Cuisine</option>
          <option>Italian</option>
          <option>Chinese</option>
          <option>Indian</option>
          <option>Japanese</option>
          <option>Mexican</option>
          <option>Thai</option>
          <option>Vietnamese</option>
          <option>Spanish</option>
          <option>British</option>
          <option>Canadian</option>
          <option>Croatian</option>
          <option>Egyptian</option>
          <option>French</option>
          <option>Greek</option>
          <option>Irish</option>
          <option>Jamaican</option>
          <option>Kenyan</option>
          <option>Malaysian</option>
          <option>Moroccan</option>
          <option>Polish</option>
          <option>Portuguese</option>
          <option>Russian</option>
          <option>American</option>
          <option>Tunisian</option>
          <option>Turkish</option>
          <option>Ukrainian</option>
        </select>
      </form>
    </div>
  );
};

export default AreaFilter;
