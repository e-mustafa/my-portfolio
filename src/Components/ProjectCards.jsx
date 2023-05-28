import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { myProjects } from "./mydata";
import ProjectDetails from "./ProjectDetails";

export default function ProjectCards() {
	const [show, setShow] = useState(false);
	const [modalData, setModalData] = useState({});

	const handelModal = (p) => {
		setShow(true);
		setModalData(p);
	};

	return (
		<>
			<Row className="gap-row-2">
				{myProjects?.map((p, i) => (
					<Col
						xs={12}
						sm={6}
						lg={4}
						key={p.id}
						style={{ animationDelay: `${i * 80}ms` }}
						className="card-col"
					>
						<Card
							onClick={() => handelModal(p)}
							className="project-card bg-dark text-white overflow-hidden  c-pointer h-100"
						>
							<Card.Img
								src={p.img}
								alt="Card image "
								className="h-100"
							/>
							<div className="project-info">
								<h3>{p.title}</h3>
								<p>design and devlopment</p>
							</div>
						</Card>
					</Col>
				))}
			</Row>

			<ProjectDetails modalData={modalData} show={show} setShow={setShow} />
		</>
	);
}
