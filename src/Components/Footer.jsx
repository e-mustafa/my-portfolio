import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SocialIcons from "./SocialIcons";

export default function Footer() {
	return (
		<footer className="footer-section">
			<Container className=" pt-5">
				<div className="subscribe ">
					<Row>
						<Col xs={12} md={6}>
							<h4 className="text-light mb-4 mb-lg-0">
								See my projects at once, & leave here your email Address
							</h4>
						</Col>

						<Col xs={12} md={6}>
							<div>
								<div className="subscribe-email">
									<Form.Control
										type="email"
										placeholder="Enter Your Email"
									/>
									<Button className="btn text-light border-0 subscribe-button">
										Send
									</Button>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
			{/* copyright */}
			<div className="copyright mt-5 py-3 bg-dark">
				<div className="container d-flex justify-content-center justify-content-lg-between align-items-center flex-wrap text-muted">
					<SocialIcons />
					<span className="text-center">
						Copyrights &#169;
						{new Date().getFullYear()}&#160; designed & developed by
						&#160;
						<a
							href="https://e-mustafa.github.io/portfolio/"
							target="_blank"
							rel="noreferrer"
						>
							Mustafa Abutabl
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
}
