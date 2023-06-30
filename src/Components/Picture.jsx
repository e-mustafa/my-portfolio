import React from "react";
import "../styles/pictur.css";

import myImage from "../imgs/my-pic-with-hex.png";

export default function Picture() {
	return (
		<>
			<img src={myImage} alt="Mustafa Abutabl Pictur" width="100%" />
		</>
	);
}
