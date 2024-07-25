import Card from "./Card";

const CardList = ({ recipes }) => {
  return (
    <ul className="flex justify-center flex-row items-center mt-5 flex-wrap">
      {recipes.map((item) => {
        return (
          <li key={item}>
            <Card />
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
