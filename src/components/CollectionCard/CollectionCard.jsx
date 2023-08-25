import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import styles from "./_CollectionCard.module.scss";

const CollectionCard = ({ collection }) => {
	return (
		<div className={styles.collectionCard}>
			<img
				src={collection.image.url}
				alt={`${collection.title} collection image`}
			/>
			<Link to={collection.handle} className={styles.linkWrapper}>
				{collection.title}
				<HiOutlineArrowRight />
			</Link>
		</div>
	);
};

const collectionShape = propTypes.shape({
	id: propTypes.string,
	handle: propTypes.string,
	title: propTypes.string,
	description: propTypes.string,
	image: propTypes.shape({
		id: propTypes.string,
		url: propTypes.string,
	}),
});

CollectionCard.propTypes = {
	collection: collectionShape,
};
export default CollectionCard;
