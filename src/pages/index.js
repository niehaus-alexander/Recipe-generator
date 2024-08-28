import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start text-center lg:text-left">
        <Image
          alt="some delicious food"
          width={250}
          height={250}
          src="https://images.unsplash.com/photo-1503810473512-f64b56827964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDI%3D"
          className="hidden lg:block max-w-sm rounded-2xl shadow-2xl"
        />
        <div className="max-w-2xl">
          <h1 className="text-3xl lg:text-5xl font-bold">Hello Foodie!</h1>
          <p className="py-6 px-4 lg:px-0 ">
            Welcome to Recipe Haven, your ultimate destination for culinary
            inspiration and delicious creations. Explore our extensive
            collection of recipes, from timeless classics to innovative dishes,
            all designed to satisfy every palate. Can't decide what to cook? Let
            our Random Recipe Picker choose for you and take the guesswork out
            of meal planning!
          </p>
          <Link className="btn btn-primary" href="/inspiration">
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}
