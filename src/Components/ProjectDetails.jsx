import React, { useRef } from "react";
import { useEffect } from "react";
import { CloseButton, Col, Image, Modal, Row, Stack } from "react-bootstrap";

function ProjectDetails({ show, setShow, modalData }) {
	const img_wrap = useRef(null);

	useEffect(() => {
		// get div height depends on screen width
		const getElementHight = () => {
			if (img_wrap.current) {
				const divHeight = img_wrap.current.clientHeight;
				document.documentElement.style.setProperty("--img-wrapper-hight", `${divHeight}px`);
			}
		};

		getElementHight();
	}, [img_wrap.current?.clientHeight]);

	return (
		<Modal
			show={show}
			onHide={() => setShow(false)}
			// backdrop={false}
			centered
			size="lg"
		>
			<CloseButton className="close-button bg-info" onClick={() => setShow(false)} />
			<Modal.Body as={Row} className="align-items-center p-4">
				<Col xs={12} lg={6}>
					<div className="card-img-wrap" ref={img_wrap}>
						<Image
							className={
								modalData.img && (modalData.img?.length > 1 ? "row_card-img" : "w-100")
							}
							src={
								modalData.img &&
								(modalData.img?.length > 1 ? modalData.img[1] : modalData.img[0])
							}
							alt={modalData?.title}
						/>
					</div>
				</Col>
				<Col xs={12} lg={6}>
					<Stack>
						<div className="row_card-items my-4">
							<h3 className="row_card-title text-light ">{modalData?.title}</h3>
							<p className="row_card-text text-muted text-justify">
								{modalData?.description}
							</p>
							<p className="text-muted">{modalData?.Language?.join(", ")}</p>
						</div>
						<div className="d-flex gap-3 flex-wrap justify-content-center">
							<a
								className="subscribe-button py-2 text-light me-3"
								href={modalData?.githubLink}
								target="_blank"
								rel="noreferrer"
							>
								Github
							</a>

							<a
								className="subscribe-button py-2 text-light me-3"
								href={modalData?.link}
								target="_blank"
								rel="noreferrer"
							>
								Visit Site
							</a>
						</div>
					</Stack>
				</Col>
			</Modal.Body>
		</Modal>
	);
}

export default ProjectDetails;
