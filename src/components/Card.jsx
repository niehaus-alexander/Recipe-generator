import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Card = ({ data, onDeleteRecipe, onToggleFavorites, favoriteRecipes }) => {
  const [deleteMode, setDeleteMode] = useState(false);
  const router = useRouter();

  const isFavorite = favoriteRecipes.some((recipe) => recipe.id === data.id);
  return (
    <div className="card bg-primary text-primary-content w-96 m-6 relative">
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <button onClick={() => onToggleFavorites(data)}>
          <FontAwesomeIcon
            icon={faStar}
            size="2x"
            className="absolute top-[-1rem] right-[-1rem]"
            color={isFavorite ? "orange" : "black"}
          />
        </button>
        {!data.isFetched && (
          <p>
            <span className="font-semibold">Time:</span> {data.timeInMinutes}{" "}
            min.
          </p>
        )}
        <p>
          <span className="font-semibold">Cuisine:</span> {data.cuisine}
        </p>
        {!data.isFetched && (
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
