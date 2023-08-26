import styles from "./_QuantityCounter.module.scss";
const QuantityCounter = ({ desiredQuantity, setDesiredQuantity }) => {
	const handleChange = (e) => {
		const { value, min, max } = e.target;
		const validatedValue = Math.max(
			Number(min),
			Math.min(Number(max), Number(value))
		);
		setDesiredQuantity(Number(validatedValue));
	};
	const handleIncrement = () => {
		if (desiredQuantity >= 250) return;
		setDesiredQuantity((prev) => prev + 1);
	};
	const handleDecrement = () => {
		if (desiredQuantity <= 1) return;
		setDesiredQuantity((prev) => prev - 1);
	};
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
				value={desiredQuantity}
				onChange={handleChange}
			/>
			<button className={styles.quantityBtn} onClick={handleIncrement}>
				{" "}
				+{" "}
			</button>
		</div>
	);
};
export default QuantityCounter;
