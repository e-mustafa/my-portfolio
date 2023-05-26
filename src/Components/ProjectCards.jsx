import React, { useEffect, useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";
import { myProjects } from "./mydata";

export default function ProjectCards() {
	const [show, setShow] = useState(false);
	console.log(show);

	useEffect(() => {
		// Typewriter Animation With JavaScript ?
	},[])

	const modal = (
		<Modal
			show={show}
			onHide={() => setShow(!show)}
			backdrop={false}
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="example-custom-modal-styling-title">
					Custom Modal Styling
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
					unde commodi aspernatur enim, consectetur. Cumque deleniti
					temporibus ipsam atque a dolores quisquam quisquam adipisci
					possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
					quasi quod accusamus eos quod. Ab quos consequuntur eaque quo
					rem! Mollitia reiciendis porro quo magni incidunt dolore amet
					atque facilis ipsum deleniti rem!
				</p>
			</Modal.Body>
		</Modal>
	);

	return (
		<Row>
			{myProjects?.map((p, i) => (
				<Col
					xs={12}
					sm={6}
					lg={4}
					key={p.id}
					style={{ animationDelay: `${i * 80}ms` }}
					className="card-col"
				>
					<div onClick={() => setShow(!show)}>
						<Card className="project-card bg-dark text-white overflow-hidden mb-3 c-pointer">
							<Card.Img src={p.img} alt="Card image" />
							<div className="project-info">
								<h3>{p.title}</h3>
								<p>design and devlopment</p>
								{modal}
							</div>
						</Card>
					</div>
				</Col>
			))}
		</Row>
	);
}
