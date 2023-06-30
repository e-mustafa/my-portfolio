import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function SkeletonCard() {
	return (
		<div>
			<Row className="my-4">
				{[...Array(6)].map((_, i) => (
					<Col xs={12} sm={6} lg={4} key={i}>
						<Card className="skeleton-card bg-secondary gap-3"></Card>
					</Col>
				))}
			</Row>
		</div>
	);
}

export default SkeletonCard;
