import { useLoaderData } from "react-router";
import { getProductsInCollection } from "../../api/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import HeroImg from "../../assets/images/home-hero.jpg";
import styles from "./_Home.module.scss";

const loader = () => {
	return getProductsInCollection("featured");
};
const Home = () => {
	const data = useLoaderData();

	const renderCards = data
		.slice(0, 3)
		.map(({ node }) => <ProductCard key={node.id} product={node} />);
	return (
		<main className={styles.home}>
			<div className={styles.heroImgWrapper}>
				<img src={HeroImg} alt="Clothes on a rack" />
			</div>
			<section className={styles.featuredProducts}>
				<p className={styles.smallText}>Latest Collection</p>
				<h2>Basics &apos;23</h2>
				<div className={styles.productGrid}>{renderCards}</div>
			</section>
		</main>
	);
};

export default Home;
export { loader };
