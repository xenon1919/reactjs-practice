import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul classNameNameName="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
