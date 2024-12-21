import styles from "./Item.module.css";
const Item = ({ foodItem }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };
  return (
    <li classNameNameName={`${styles["kg-item"]} list-group-item`}>
      <span classNameNameName={styles["kg-span"]}>{foodItem}</span>

      <button
        classNameNameName={`${styles.button} btn btn-info `}
        onClick={(event) => handleBuyButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
