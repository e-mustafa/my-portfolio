import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import React from "react";
// import { CircularProgress } from "react-circular-gradient-progress";

const CircleProgress = () => (
	<>
		<h2>progress</h2>
		<CircularProgressBar
			percent={75}
			round
			linearGradient={["#01EEFE", "#004F54"]}
		/>
	</>
);

export default CircleProgress;
