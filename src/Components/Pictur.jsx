import React from "react";
import "../styles/pictur.css";

import myImage from "../imgs/my-pic-with-hex.png";

export default function Pictur() {
	return (
		<>
			<img src={myImage} alt="Mustafa Abutabl Pictur" width="100%"  />
			{/* <div className="contain">
				<div className="hex"></div>

				<img src="/img/my-image.png" alt="" className="personal-pic" />
				
				<div className="hex-lines">
					<span className="hex-line"></span>
					<span className="hex-line"></span>
				</div>
			</div> */}
		</>
	);
}
