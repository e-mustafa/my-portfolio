import React, { useState } from "react";
import {
	Button,
	CloseButton,
	Col,
	Container,
	Form,
	Row,
	Spinner,
	Toast,
	ToastContainer,
} from "react-bootstrap";

import WebDesignImg from "../imgs/Web-Design.png";

import emailjs from "@emailjs/browser";

let regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
let regexPhone = new RegExp("^[-+0-9]{7,15}$");

function Contact() {
	// show/hide toast
	const [show, setShow] = useState(false);

	// form control and functions
	const [formInfo, setFormInfo] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [isValid, setIsValid] = useState({});
	const [btnText, setBtnText] = useState("Send");
	const [status, setStatus] = useState({});

	function handelInput(e) {
		setFormInfo((currentValue) => {
			return {
				...currentValue,
				[e.target.name]: e.target.value,
			};
		});
		if (e.target.name === "email") {
			if (e.target.value !== "" && regexEmail.test(e.target.value)) {
				setIsValid((prev) => {
					return { ...prev, email: { invalid: false, message: "" } };
				});
			} else {
				setIsValid((prev) => {
					return {
						...prev,
						email: {
							invalid: true,
							message: "Please enter a valid email address",
						},
					};
				});
			}
		}

		if (e.target.name === "phone") {
			if (e.target.value !== "" && regexPhone.test(e.target.value)) {
				setIsValid((prev) => {
					return {
						...prev,
						phone: { invalid: false, message: "" },
					};
				});
			} else {
				setIsValid((prev) => {
					return {
						...prev,
						phone: {
							invalid: true,
							message: "valid number between 7 and 15 digits",
						},
					};
				});
			}
		}
	}

	function handelSubmit(e) {
		e.preventDefault();
		if (formInfo.email === "" && formInfo.phone === "") {
			setIsValid((prev) => {
				return {
					...prev,
					email: {
						invalid: true,
						message: "Please enter an email or phone No.",
					},
					phone: {
						invalid: true,
						message: "Please enter a phone No. or email",
					},
				};
			});
		} else if (isValid?.email?.invalid === false || isValid?.phone?.invalid === false) {
			setBtnText("sending...");
			emailjs
				.sendForm("service_lp3qp5q", "template_a98e2km", e.target, "Q4VgSuu5zR0FYlGeR")
				.then(
					(result) => {
						console.log(result);
						setBtnText("Message Sent");
						setStatus({
							success: true,
							message: "Message sent successfully",
						});
						setShow(true);
						e.target.reset();
						setTimeout(() => setBtnText("Send"), 3000);
					},
					(error) => {
						console.log(error);
						setBtnText("Unsent");
						setShow(true);
						setStatus({
							success: false,
							message: "Something went wrong, Please try again later..",
						});
					}
				);
		}
	}

	return (
		<section id="contact" className="contact-section">
			<Container id="">
				<Row className="my-5">
					<Col xs={12} md={6}>
						<img src={WebDesignImg} alt="Web Design" width="100%" height="100%" />
					</Col>
					<Col xs={12} md={6}>
						<div>
							<h2 className="section-title">Get In Touch</h2>
							<h6 className="text_light mb-4">I'd love to here from you</h6>
							<Form onSubmit={handelSubmit} action="post">
								<Row className="gap-row-2 mb-3">
									<Form.Group as={Col} xs={12} lg={6} controlId="formGridFName">
										<Form.Control
											type="text"
											name="name"
											placeholder="Your Name"
											value={formInfo?.name}
											onInput={handelInput}
										/>
									</Form.Group>

									<Form.Group
										as={Col}
										xs={12}
										lg={6}
										controlId="formGridPhone"
										className="position-relative"
									>
										<Form.Control
											type="tel"
											name="phone"
											placeholder="Phone Number *"
											value={formInfo?.phone}
											onInput={handelInput}
											isInvalid={isValid?.phone?.invalid}
										/>
										{isValid.phone?.invalid && (
											<Form.Control.Feedback type="invalid" tooltip>
												{isValid?.phone?.message}
											</Form.Control.Feedback>
										)}
									</Form.Group>

									<Form.Group
										as={Col}
										xs={12}
										controlId="formGridEmail"
										className="position-relative"
									>
										<Form.Control
											type="email"
											name="email"
											placeholder="Enter email *"
											value={formInfo?.email}
											onInput={handelInput}
											isInvalid={isValid?.email?.invalid}
										/>
										{isValid.email?.invalid && (
											<Form.Control.Feedback type="invalid" tooltip>
												{isValid?.email?.message}
											</Form.Control.Feedback>
										)}
									</Form.Group>

									<Form.Group as={Col} xs={12} controlId="formGridCity">
										<Form.Control
											as="textarea"
											name="message"
											rows={3}
											placeholder="Message..."
											value={formInfo?.message}
											onInput={handelInput}
										/>
									</Form.Group>
								</Row>

								<Button
									variant="light"
									type="submit"
									className="btn btn-borderd w-50 "
									size="large"
								>
									{btnText === "sending..." && (
										<Spinner animation="border" variant="info" size="sm" />
									)}{" "}
									{btnText}
								</Button>
							</Form>

							<ToastContainer position="bottom-start" className="position-fixed p-3">
								<Toast
									onClose={() => setShow(false)}
									show={show}
									delay={4000}
									autohide
									bg={status?.success ? "success" : "danger"}
									style={{ maxWidth: "320px" }}
								>
									<Toast.Body>
										<div className="d-flex justify-content-between align-items-center">
											<h6 className="text-light me-auto">{status?.message}</h6>
											<CloseButton onClick={() => setShow(false)} />
										</div>
									</Toast.Body>
								</Toast>
							</ToastContainer>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
export default React.memo(Contact);
