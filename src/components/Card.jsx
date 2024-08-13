const Card = ({ data }) => {
  return (
    <div className="card bg-primary text-primary-content w-96 m-6">
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p>
          <span className="font-semibold">Time:</span> {data.timeInMinutes} min.
        </p>
        <p>
          <span className="font-semibold">Cuisine:</span> {data.cuisine}
        </p>
        <p>
          <span className="font-semibold">Difficulty:</span> {data.difficulty}
        </p>
        <div className="card-actions justify-end">
          <button className="btn">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
