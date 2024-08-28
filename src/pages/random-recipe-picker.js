export default function RandomRecipePicker() {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-lg m-6 text-center">
          Don't feel like thinking about what to cook? On this page we randomly
          pick you a recipe from your{" "}
          <span className="font-bold">favorites</span> and from the{" "}
          <a
            href="https://www.themealdb.com/api.php"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 hover:underline"
          >
            mealDB database
          </a>
          .
        </h2>
        <div className="w-full p-6">
          <h2></h2>
        </div>
      </div>
    </div>
  );
}
