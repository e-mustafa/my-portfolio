import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function SocialIcons() {
	return (
		<ul className="social-icons justify-content-center m-lg-0 my-3 p-0 ">
			<li>
				<a
					href="https://www.linkedin.com/in/e-mustafa" target="_blank" rel="noreferrer">
					<FaLinkedinIn fontSize="large" />
				</a>
			</li>

			<li>
				<a href="https://github.com/e-mustafa" target="_blank" rel="noreferrer">
					<FaGithub fontSize="large" />
				</a>
			</li>

			<li>
				<a href="https://wa.me/+201119706667" target="_blank" rel="noreferrer">
					<FaWhatsapp fontSize="large" />
				</a>
			</li>
		</ul>
	);
}
