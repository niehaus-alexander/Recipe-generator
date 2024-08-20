import Card from "./Card";

const CardList = ({ recipes }) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <ul className="flex justify-center flex-row items-center mt-5 flex-wrap">
        {recipes.map((item) => {
          return (
            <li key={item}>
              <Card data={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardList;
