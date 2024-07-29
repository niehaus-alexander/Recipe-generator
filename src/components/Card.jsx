import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl min-w-[30rem] m-6">
      <figure>
        <Image
          src="https://images.unsplash.com/photo-1503810473512-f64b56827964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDI%3D"
          alt="Food"
          height={150}
          width={150}
        />
      </figure>
      <div className="card-body w-xs">
        <h2 className="card-title">{data.name}</h2>
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
