import React from "react";

import "../styles/skills.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { mySkills } from "./mydata";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import { Stack } from "react-bootstrap";




export default function SkillsSwiper() {
	return (
		<section id="skills" className=" text-light py-5">
			<div className="container">
				<div className="skills-section">
					<Stack className="my-5 text-center">
						<h2 className="section-title">Skills</h2>
						<p className="text-muted">You can see my skills here</p>
					</Stack>

					<div className="my-5 mx-1 mx-lg-5">
						<Swiper
							// slidesPerView={2.5}
							spaceBetween={30}
							loop={true}
							navigation={true}
							modules={[Navigation]}
							className="mySwiper"
							breakpoints={{
								470: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 40,
								},
								1024: {
									slidesPerView: 3,
									spaceBetween: 50,
								},
							}}
						>
							<div className="d-flex jusify-content-center w-75 m-auto ">
								{mySkills?.map((s, i) => (
									<SwiperSlide key={i}>
										<div className="d-flex flex-column jusify-content-center text-center">
											<CircularProgressBar
												key={i}
												percent={s.value}
												round
												fontColor="#fff"
												linearGradient={["#01EEFE", "#004F54"]}
											/>
											<h5 className="">{s.name}</h5>
										</div>
									</SwiperSlide>
								))}
							</div>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
}
