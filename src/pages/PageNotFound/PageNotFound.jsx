import { Link } from "react-router-dom";
import { BiSolidError } from "react-icons/bi";
import styles from "./_PageNotFound.module.scss";
const PageNotFound = () => {
	return (
		<main className={styles.pageNotFound}>
			<h1 className={styles.message}>
				<BiSolidError className={styles.icon} size={50} />
				There is nothing here...
			</h1>
			<Link to="/" className={styles.link}>
				<button className={styles.errorBtn}>Go to homepage</button>
			</Link>
		</main>
	);
};

export default PageNotFound;
