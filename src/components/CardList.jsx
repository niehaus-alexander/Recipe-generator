import Card from "./Card";

const placeholder = [1, 2, 3, 4, 5];

const CardList = () => {
  return (
    <ul className="flex justify-center flex-row items-center mt-5 flex-wrap">
      {placeholder.map((item) => {
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
