import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import { HashLink } from "react-router-hash-link";
import { navLinks } from "./mydata";



export default function NavbarMain() {
	const location = useLocation();

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
				<Container>
					<HashLink to="/#home" className="navbar-brand">
						<img
							src={logo}
							className="App-logo"
							alt="Mustafa Ahmed"
							width="50px"
						/>
					</HashLink>

					<Navbar.Toggle aria-controls="responsive-navbar-nav">
						<span className="icon-bar top-bar"></span>
						<span className="icon-bar middle-bar"></span>
						<span className="icon-bar bottom-bar"></span>
					</Navbar.Toggle>

					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="align-items-center bg-xs-dark text-center py-2"
					>
						<Nav className="me-auto flex-grow-1 justify-content-center">
							{navLinks?.map((e, i) => (
								<HashLink
									key={i}
									smooth
									to={`#${e.link}`}
									className={`nav-fill-link ${
										location.hash.includes(e.link) ? "active" : ""
									}`}
									data-title={e.title}
								>
									{e.title}
								</HashLink>
							))}
						</Nav>

						<span className="m-auto">
							<SocialIcons />
						</span>

						<HashLink to="/#cntact"
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
