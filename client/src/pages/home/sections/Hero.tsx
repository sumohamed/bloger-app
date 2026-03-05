import { Link } from "react-router-dom";
import styles from "./hero.module.scss";

const Hero = () => {
	return (
		<section className={styles.hero} aria-labelledby="hero-title">
			<article className={styles["hero__content"]}>
				<h1 id="hero-title" className={styles["hero__content--title"]}>
					A modern publishing platform
				</h1>
				<p className={styles["hero__content--desc"]}>
					Grow your audience and build your online brand
				</p>
			</article>
			<div
				className={styles["user-actions"]}
				role="group"
				aria-label="call to action"
			>
				<Link className="btn-primary" data-type="primary" to="/register">
					Start for Free
				</Link>
				<Link className="btn-primary" data-type="secondary" to="/about">
					Learn More
				</Link>
			</div>
		</section>
	);
};

export default Hero;
