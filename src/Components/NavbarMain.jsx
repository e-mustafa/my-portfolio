import React, { useEffect, useState } from "react";
// import logo from "../imgs/portf-05.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import SocialIcons from "./SocialIcons";
import { HashLink } from "react-router-hash-link";
import { navLinks } from "./mydata";
import { TbBrand4Chan } from "react-icons/tb";

export default function NavbarMain() {
	const [activeLink, setActiveLink] = useState("home");

	const [showMobileNav, setShowMobileNav] = useState(false);

	useEffect(() => {
		const handleMobileNav = () => {
			setShowMobileNav(false);
		};
		window.addEventListener("mousedown", handleMobileNav);
	});

	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY > 50;
			setScrolled(offset);
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header>
			<Navbar
				fixed="top"
				collapseOnSelect
				expand="lg"
				className={`shadow p-0 ${scrolled ? "App-header" : ""}`}
			>
				<Container onClick={() => showMobileNav && setShowMobileNav(false)}>
					<HashLink to="#home" className="navbar-brand">
						{/* <img
							src={logo}
							className="App-logo"
							alt="Mustafa Ahmed"
							width="50px"
						/> */}
						<TbBrand4Chan fontSize={35} color="#01eefe" />
					</HashLink>

					<Navbar.Toggle
						aria-controls="responsive-navbar-nav"
						onClick={() => setShowMobileNav(!showMobileNav)}
					>
						<span className="icon-bar top-bar"></span>
						<span className="icon-bar middle-bar"></span>
						<span className="icon-bar bottom-bar"></span>
					</Navbar.Toggle>

					<Navbar.Collapse
						id="responsive-navbar-nav"
						className={`align-items-center bg-xs-dark text-center py-4 py-lg-2
            ${!scrolled ? "mobileNav" : ""}
            `}
					>
						<Nav className="me-auto flex-grow-1 justify-content-center">
							{navLinks?.map((e, i) => (
								<HashLink
									key={i}
									smooth
									to={`#${e.link}`}
									className={`nav-fill-link ${
										activeLink === e.link ? "active" : ""
									}`}
									data-title={e.title}
									onClick={() => setActiveLink(e.link)}
								>
									{e.title}
								</HashLink>
							))}
						</Nav>

						<span className="m-auto">
							<SocialIcons />
						</span>

						<HashLink
							to="#contact"
							className="btn btn-borderd my-2 my-md-0 ms-lg-3"
						>
							Let's Contact
						</HashLink>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}
