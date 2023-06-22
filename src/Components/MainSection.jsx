import React, { useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import Picture from "./Picture";

export default function MainSection() {
	const [typewriter, setTypewriter] = useState("");

	useEffect(() => {
		function sleep(ms) {
			return new Promise((resolve) => setTimeout(resolve, ms));
		}

		const phrases = [
			" FrontEnd web Developer",
			" BackEnd web Developer",
			" Fullstack web Developer",
		];

		let sleepTime = 100;

		let curPhraseIndex = 0;

		const writeLoop = async () => {
			while (true) {
				let curWord = phrases[curPhraseIndex];

				for (let i = 0; i < curWord.length; i++) {
					setTypewriter(curWord.substring(0, i + 1));
					await sleep(sleepTime);
				}

				await sleep(sleepTime * 10);

				for (let i = curWord.length; i > 0; i--) {
					setTypewriter(curWord.substring(0, i - 1));
					await sleep(sleepTime);
				}

				await sleep(sleepTime * 5);

				if (curPhraseIndex === phrases.length - 1) {
					curPhraseIndex = 0;
				} else {
					curPhraseIndex++;
				}
			}
		};
		writeLoop();
	}, []);

	return (
		<main id="home" className="baner" style={{ paddingTop: "63.4px" }}>
			<Container className="py-5">
				<Row className="align-items-center">
					<Col xs={12} lg={6}>
						<Stack gap={2} className="text-light mt-0 mt-lg-5 pb-5">
							<h5 className="welcome-line">
								Welcome All in my Portfolio
							</h5>
							<h1>
								I'm <span>Mustafa Abutabl,</span>
							</h1>
							<h2>
								I'm a{" "}
								<span className="typewriter">
									{typewriter}
									<span>|</span>
								</span>
							</h2>

							<p>
								{" "}
								Hello everyone, i have One year of experience in web
								development{" "}
							</p>

							<HashLink
								to="/#contact"
								className="icon-link icon-link-hover"
							>
								let's connect <FaRegArrowAltCircleRight />
							</HashLink>
						</Stack>
					</Col>

					<Col xs={12} lg={6} className="order-0 order-lg-2">
						<div className="pic-parent px-0 px-lg-4">
							<Picture />
						</div>
					</Col>
				</Row>
			</Container>
		</main>
	);
}
