import React, { useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import SocialIcons from "./SocialIcons";
import { HashLink } from "react-router-hash-link";
import { navLinks } from "./mydata";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { Link } from "react-scroll";

export default function NavbarMain() {
	// const [activeLink, setActiveLink] = useState("home");

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

	const mobile_nav_ref = useRef(null);
	useEffect(() => {
		// handel close modal outside click
		const handleClick = (e) => {
			if (mobile_nav_ref.current && !mobile_nav_ref.current.contains(e.target)) {
				setShowMobileNav(false);
			}
		};
		document.addEventListener("mousedown", handleClick);
		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, [setShowMobileNav]);

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
						<MdOutlineDeveloperBoard fontSize={35} color="#01eefe" />
					</HashLink>

					<Navbar.Toggle
						aria-controls="responsive-navbar-nav"
						ref={mobile_nav_ref}
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
								<Link
									key={i}
									to={`${e.link}`}
									className={`nav-fill-link c-pointer`}
									data-title={e.title}
									// onClick={() => setActiveLink(e.link)}
									spy={true}
									smooth={true}
									duration={500}
									offset={-50}
								>
									{e.title}
								</Link>
							))}
						</Nav>

						<span className="m-auto">
							<SocialIcons />
						</span>

						<HashLink to="#contact" className="btn btn-borderd my-2 my-md-0 ms-lg-3">
							Let's Contact
						</HashLink>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}
