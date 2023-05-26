import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProjectModal({ show, setShow }) {

	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={() => setShow(true)}>
				Launch demo modal
			</Button>

			<Modal show={show} onHide={setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Woohoo, you are reading this text in a modal!
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={setShow(false)}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ProjectModal;
