import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ data, onDeleteRecipe }) => {
  const [deleteMode, setDeleteMode] = useState(false);
  return (
    <div className="card bg-primary text-primary-content w-96 m-6">
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <FontAwesomeIcon icon={faStar} size="3x" />
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
          {!deleteMode ? (
            <button className="btn">Details</button>
          ) : (
            <button
              onClick={() => {
                onDeleteRecipe(data.id);
              }}
              className="btn btn-success"
            >
              Confirm Delete!
            </button>
          )}

          {data.ownRecipe && (
            <button
              onClick={() => setDeleteMode(!deleteMode)}
              className="btn btn-error"
            >
              {deleteMode ? "Cancel" : "Delete"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
