import { Link, useRouteError } from "react-router-dom";

import { BiSolidError } from "react-icons/bi";
import styles from "./_Error.module.scss";
const Error = () => {
	const error = useRouteError();
	return (
		<main className={styles.error}>
			<BiSolidError className={styles.errorIcon} size={50} />
			<h1 className={styles.errorMessage}>Error: {error.message}</h1>
			<pre>
				{error.status} - {error.statusText}
			</pre>

			<p>
				Well, this is awkward... but you have stepped on a bug. If you are
				interested in letting the developer know please submit an issue on
				GitHub.
			</p>

			<Link to=".." className={styles.errorLink} path="relative">
				<button className={styles.errorBtn}>Go back to safety!</button>
			</Link>
		</main>
	);
};
export default Error;
