import { Link } from "react-router-dom";
import styles from "../styles/components/cta.module.scss";
import "../styles/global/typography.scss";

// A Call to action component, which uses "path" and "content" props to render a link
const CTA = ({ title, path }) => {
	return (
	<Link className={styles.callToAction} to={path}>
		<p className={`${styles.callToAction__title} heading heading--regular`}>
				{title}	
		</p>
	</Link>

	);
};

export default CTA;
