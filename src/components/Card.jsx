import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";

const Card = ({ data, onDeleteRecipe, onToggleFavorites, favoriteRecipes }) => {
  const [deleteMode, setDeleteMode] = useState(false);
  const router = useRouter();

  console.log(data.id);

  const isFavorite = favoriteRecipes.some((recipe) => recipe.id === data.id);
  return (
    <div className="card bg-primary text-primary-content w-96 m-6 relative rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-semibold mb-4">{data.name}</h2>

        <button
          onClick={() => onToggleFavorites(data)}
          className="absolute top-[-1rem] right-[-1rem]"
        >
          <FontAwesomeIcon
            icon={faStar}
            size="2x"
            className="transition-colors duration-300"
            color={isFavorite ? "orange" : "black"}
          />
        </button>

        {router.pathname !== "/inspiration" && (
          <p className="mb-2">
            <span className="font-semibold">Time:</span>{" "}
            {data.isFetched ? "?" : data.timeInMinutes} min.
          </p>
        )}
        <p className="mb-2">
          <span className="font-semibold">Cuisine:</span> {data.cuisine}
        </p>
        {router.pathname !== "/inspiration" && (
          <p className="mb-4">
            <span className="font-semibold">Difficulty:</span>{" "}
            {data.isFetched ? "?" : data.difficulty}
          </p>
        )}

        <div className="card-actions flex justify-between mt-4">
          {!deleteMode ? (
            <Link
              href={`/recipes/${data.id}`}
              className="btn bg-white text-gray-800 hover:bg-gray-100 rounded-lg shadow-md transition-all"
            >
              Details
            </Link>
          ) : (
            <button
              onClick={() => onDeleteRecipe(data.id)}
              className="btn btn-success text-white rounded-lg shadow-md transition-all"
            >
              Confirm Delete!
            </button>
          )}

          {router.pathname === "/creator" && data.ownRecipe && (
            <button
              onClick={() => setDeleteMode(!deleteMode)}
              className={`btn btn-error text-white rounded-lg shadow-md transition-all`}
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
