import styles from "./FoodInput.module.css";
const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      classNameNameName={styles.foodInput}
      onChange={handleOnChange}
      type="text"
      placeholder="Enter a food item here"
    />
  );
};

export default FoodInput;
