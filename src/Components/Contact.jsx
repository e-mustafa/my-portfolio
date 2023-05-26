import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Contact() {
	const [formInfo, setFormInfo] = useState({
		fName: "",
		lName: "",
		email: "",
		phone: "",
		message: "",
	});

  const [btnText, setBtnText] = useState("Send")
  const [status, setStatus] = useState("")

  
	function handelInput(e) {
		setFormInfo((currentValue) => {
			return {
				...currentValue,
				[e.target.name]: e.target.defaultValue,
			};
		});
	}

	function handelSubmit(e) {
		e.preventDefault();
	}

	return (
		<section id="cntact" className="contact-section">
			<Container>
				<Row>
					<Col xs={12} md={6}></Col>
					<Col xs={12} md={6}>
						<div>
							<h2 className="section-title mb-4">Get In Touch</h2>
							<Form onSubmit={handelSubmit} action="post">
								<Row className="gap-row-3 mb-3">
									<Form.Group
										as={Col}
										xs={12}
										lg={6}
										controlId="formGridFName"
									>
										<Form.Control
											type="text"
											name="fName"
											placeholder="Your First Name"
											defaultValue={formInfo?.fName}
											onInput={handelInput}
										/>
									</Form.Group>

									<Form.Group
										as={Col}
										xs={12}
										lg={6}
										controlId="formGridLName"
									>
										<Form.Control
											type="text"
											name="lName"
											placeholder="Your Last Name"
											defaultValue={formInfo?.lName}
											onInput={handelInput}
										/>
									</Form.Group>

									<Form.Group
										as={Col}
										xs={12}
										controlId="formGridEmail"
									>
										<Form.Control
											type="email"
											name="email"
											placeholder="Enter email"
											defaultValue={formInfo?.email}
											onInput={handelInput}
										/>
									</Form.Group>

									<Form.Group
										as={Col}
										xs={12}
										controlId="formGridPhone"
									>
										<Form.Control
											type="tel"
											name="phone"
											placeholder="Your Phone Number"
											defaultValue={formInfo?.phone}
											onInput={handelInput}
										/>
									</Form.Group>

									<Form.Group
										as={Col}
										xs={12}
										controlId="formGridCity"
									>
										<Form.Control
											as="textarea"
											name="message"
											rows={3}
											placeholder="Message..."
											defaultValue={formInfo?.message}
											onInput={handelInput}
										/>
									</Form.Group>
								</Row>

								<Button
									variant="light"
									type="submit"
									className="btn btn-borderd"
								>
									{btnText}
								</Button>
							</Form>
							<p>{status} sbsdbsdbsdb</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Contact;
