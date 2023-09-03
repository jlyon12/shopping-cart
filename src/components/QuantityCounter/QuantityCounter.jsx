import propTypes from "prop-types";
import styles from "./_QuantityCounter.module.scss";
const QuantityCounter = ({
	controlledState,
	handleIncrement,
	handleDecrement,
	handleChange,
}) => {
	return (
		<div className={styles.quantityCounter}>
			<button className={styles.quantityBtn} onClick={handleDecrement}>
				{" "}
				-{" "}
			</button>
			<input
				type="number"
				name="quantity"
				min="1"
				max="250"
				placeholder="1"
				value={controlledState}
				onChange={handleChange}
			/>
			<button className={styles.quantityBtn} onClick={handleIncrement}>
				{" "}
				+{" "}
			</button>
		</div>
	);
};

QuantityCounter.propTypes = {
	controlledState: propTypes.number,
	handleIncrement: propTypes.func,
	handleDecrement: propTypes.func,
	handleChange: propTypes.func,
};
export default QuantityCounter;
