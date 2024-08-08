import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div className="container card card-side bg-base-100 shadow-xl m-12 max-w-xs sm:max-w-sm md:max-w-md">
      <figure>
        <Image
          src="https://images.unsplash.com/photo-1503810473512-f64b56827964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDI%3D"
          alt="Food"
          height={150}
          width={150}
          className="rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title break-words">{data.name}</h2>
        <p>Cuisine: {data.cuisine}</p>
        <p>Time: {data.timeInMinutes} min.</p>
        <p>Difficulty: {data.difficulty}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
