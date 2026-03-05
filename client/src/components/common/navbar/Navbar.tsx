import styles from "./navbar.module.scss";

import blogerLogo from "../../../assets/images/logo.svg";

import Navigation from "./Navigation";
import DropdownItem from "./DropdownItem";
import AuthButtons from "./AuthButtons";
import Button from "../button/Button";
import { IoMdClose } from "react-icons/io";
import { FiAlignJustify } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isMobileNav, setIsMobileNav] = useState<boolean>(false);

	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout>;

		const handleResize = () => {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				if (window.innerWidth >= 900) {
					setIsMobileNav(false);
				}
			}, 100);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleMobleNav = () => {
		setIsMobileNav((prev) => !prev);
	};

	return (
		<header className={styles.header}>
			<div className={`container | ${styles["navigation"]}`}>
				<Link to="/" aria-label="Bloger - Go to Home Page">
					<img src={blogerLogo} alt="bloger" className={styles.logo} />
				</Link>
				<Button
					className={styles["burger-icon"]}
					action={handleMobleNav}
					ariaLabel={isMobileNav ? "Close Menu" : "OpenMenu"}
				>
					{isMobileNav ? <IoMdClose /> : <FiAlignJustify />}
					<span className="sr-only">
						{isMobileNav ? "Close" : "Open"} navigation menu
					</span>
				</Button>
				<Navigation
					className={`
    ${isMobileNav ? styles["mobile-nav"] : styles["desktop-nav"]}
  `}
				>
					<DropdownItem />
					<AuthButtons />
				</Navigation>
			</div>
		</header>
	);
};

export default Navbar;
