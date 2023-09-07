import { Link } from "react-router-dom";
import {
	FaTwitter,
	FaFacebook,
	FaInstagram,
	FaTiktok,
	FaTumblr,
	FaYoutube,
	FaGithub,
} from "react-icons/fa";
import Subscribe from "./Subscribe";
import styles from "./_Footer.module.scss";
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<h3>Stay connected</h3>
			<Subscribe />

			<div className={styles.social}>
				<Link className={styles.twitter} to="http://www.twitter.com">
					<FaTwitter size={24} />
				</Link>
				<Link className={styles.facebook} to="http://www.facebook.com">
					<FaFacebook size={24} />
				</Link>
				<Link className={styles.instagram} to="http://www.instagram.com">
					<FaInstagram size={24} />
				</Link>
				<Link className={styles.tiktok} to="http://www.tiktok.com">
					<FaTiktok size={24} />
				</Link>

				<Link className={styles.tumblr} to="http://www.tumblr.com">
					<FaTumblr size={24} />
				</Link>

				<Link className={styles.youtube} to="http://www.youtube.com">
					<FaYoutube size={24} />
				</Link>
			</div>
			<div className={styles.credit}>
				{/* <p>probableactions</p> */}
				<Link to="http://www.github.com/probableactions">
					<FaGithub size={24} />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
