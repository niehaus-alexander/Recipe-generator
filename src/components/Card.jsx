import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Card = ({ data, onDeleteRecipe, onToggleFavorites }) => {
  const [deleteMode, setDeleteMode] = useState(false);
  const router = useRouter();
  return (
    <div className="card bg-primary text-primary-content w-96 m-6 relative">
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <button onClick={() => onToggleFavorites(data.id)}>
          <FontAwesomeIcon
            icon={faStar}
            size="2x"
            className="absolute top-[-1rem] right-[-1rem]"
            color={data.isFavorite ? "orange" : "black"}
          />
        </button>
        {router.pathname !== "/Inspiration" && (
          <p>
            <span className="font-semibold">Time:</span> {data.timeInMinutes}{" "}
            min.
          </p>
        )}
        <p>
          <span className="font-semibold">Cuisine:</span> {data.cuisine}
        </p>
        {router.pathname !== "/Inspiration" && (
          <p>
            <span className="font-semibold">Difficulty:</span> {data.difficulty}
          </p>
        )}

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

          {router.pathname === "/Creator" && data.ownRecipe && (
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
