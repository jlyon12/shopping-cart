import { useState, useEffect } from "react";
import { useLoaderData, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { getAllProducts } from "../../api/api";
import styles from "./Search.module.scss";

const loader = () => {
	return getAllProducts();
};
const Search = () => {
	const data = useLoaderData();
	const { pathname } = useLocation();
	console.log(pathname);
	const [showSearchResults, setShowSearchResults] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const [itemsFound, setItemsFound] = useState([]);
	const products = data.map((obj) => obj.node);

	useEffect(() => {
		setShowSearchResults(false);
		setSearchInput("");
	}, [pathname]);

	const handleChange = (e) => {
		const { value } = e.target;
		setSearchInput(value);
		setShowSearchResults(true);
		setItemsFound(
			products.filter((product) => product.handle.includes(value.toLowerCase()))
		);
	};

	const renderSearchResults = itemsFound.map((product) => {
		return (
			<Link key={product.handle} to={`/shop/products/${product.handle}`}>
				<div className={styles.searchItem}>
					<img src={product.featuredImage.url} alt={product.title} />
					<p>{product.title}</p>
				</div>
			</Link>
		);
	});
	return (
		<div className={styles.searchContainer}>
			<div className={styles.searchBar}>
				<FiSearch size={20} />
				<input type="search" value={searchInput} onChange={handleChange} />
			</div>

			{showSearchResults && searchInput.length > 0 && (
				<div className={styles.searchResults}>
					{renderSearchResults.length > 0
						? renderSearchResults
						: "No Results Found"}
				</div>
			)}
		</div>
	);
};

export default Search;
export { loader };
