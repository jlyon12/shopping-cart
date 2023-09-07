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
			<Link to=".." path="relative" className={styles.link}>
				<button className={styles.errorBtn}>Go to back to previous page</button>
			</Link>
		</main>
	);
};

export default PageNotFound;
