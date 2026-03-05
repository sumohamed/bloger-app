import styles from "./home.module.scss";
import Hero from "./sections/Hero";

const Home = () => {
	return (
		<main className={styles.homepage}>
			<Hero />
		</main>
	);
};

export default Home;
