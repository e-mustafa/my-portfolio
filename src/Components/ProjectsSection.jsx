import React, { useState } from "react";
import { Container, Stack, Tab, Tabs } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import { myPersonalInfo } from "./mydata";

export default function ProjectsSection() {
	const [value, setKey] = useState("home");
	return (
		<section className=" text-light py-5" id="projects">
			<Container>
				<div className="Projects-section">
					<Stack className="my-5 text-center">
						<h2 className="fs-1">My Projects</h2>
						<p>
							My name is Mustafa, I live in Egypt, this is the 5th
							project in React.js
						</p>
					</Stack>

					<div className="projectsTogler">
						<div className="tBut-1"></div>
						<div className="tBut-2"></div>
						<div className="tBut-3"></div>
					</div>

					<Tabs
						id="projects-tabs"
						activeKey={value}
						onSelect={(k) => setKey(k)}
						className="mb-3 border-0 shadow "
						fill
					>
						<Tab eventKey="home" title="Projects">
							<ProjectCards />
						</Tab>
						<Tab eventKey="profile" title="Contact"></Tab>
						<Tab eventKey="contact" title="Info">
              {/* presonal information */}
							<div>
								<h2 className="fs-2">PERSONAL INFOS</h2>

								<div className="d-flex flex-column flex-md-row flex-wrap gap-3 my-4">
									{myPersonalInfo?.map((line, i) => (
										<h6
											className="text-secondary"
											key={i}
											style={{ flex: "1 1 49%" }}
										>
											{line.title}
											{line.link ? (
												<a href={line.link}>{line.info}</a>
											) : (
												<span
													className="text-main"
													style={{ color: line?.color }}
												>
													{line.info}
												</span>
											)}
										</h6>
									))}
								</div>
							</div>
						</Tab>
					</Tabs>
				</div>
			</Container>
		</section>
	);
}
