import React, { useRef } from "react";
import { CloseButton, Col, Modal, Row, Stack } from "react-bootstrap";

function ProjectDetails({ show, setShow, modalData }) {

	const refModal = useRef(null);
	// useEffect(() => {
	// 	// handel close modal outside click
	// 	const handleClick = (e) => {
	// 		if (refModal.current && !refModal.current.contains(e.target)) {
	// 			setShow(false);
	// 		}
	// 	};
	// 	document.addEventListener("mousedown", handleClick);
	// 	return () => {
	// 		document.removeEventListener("mousedown", handleClick);
	// 	};
	// }, [setShow]);

	return (
		<Modal
			show={show}
			onHide={() => setShow(false)}
			// backdrop={false}
			centered
			size="lg"
		>
			<CloseButton
				className="close-button bg-info"
				onClick={() => setShow(false)}
			/>
			<Modal.Body as={Row} className="align-items-center p-4" ref={refModal}>
				<Col xs={12} lg={6}>
					<img
						className="row_card-img"
						src={modalData?.img}
						alt={modalData?.title}
					/>
				</Col>
				<Col xs={12} lg={6}>
					<Stack>
						<div className="row_card-items my-4">
							<h3 className="row_card-title text-light ">
								{modalData?.title}
							</h3>
							<p className="row_card-text text-muted">
								{modalData?.description}
							</p>
							<p className="text-muted">
								{modalData?.Language?.join(", ")}
							</p>
						</div>
						<div className="d-flex gap-3 flex-wrap justify-content-center">
							<a
								className="subscribe-button py-2 text-light me-3"
								href={modalData?.link}
								target="_blank"
								rel="noreferrer"
							>
								Visit Site
							</a>

							<a
								className="subscribe-button py-2 text-light me-3"
								href={modalData?.githubLink}
								target="_blank"
								rel="noreferrer"
							>
								Github
							</a>
						</div>
					</Stack>
				</Col>
			</Modal.Body>
		</Modal>
	);
}

export default ProjectDetails;
