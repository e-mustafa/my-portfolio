import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function SocialIcons() {
	return (
		<ul className="social-icons justify-content-center m-lg-0 my-3 p-0 " >
			<li>
				<a href="http://Linkedin.com" target="_blank" rel="noreferrer">
					<FaLinkedinIn fontSize="large" />
				</a>
			</li>

			<li>
				<a href="http://githup.com" target="_blank" rel="noreferrer">
					<FaGithub fontSize="large" />
				</a>
			</li>

			<li>
				<a href="http://facebook.com" target="_blank" rel="noreferrer">
					<FaFacebookF fontSize="large" />
				</a>
			</li>
		</ul>
	);
}
