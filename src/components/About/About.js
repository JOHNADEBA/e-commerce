import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
	return (
		<div className="about-cont">
			<header className="product-header">
				<h2 className="product-link">
					<span>
						<Link className="product-link-end" to="/">
							Home{" "}
						</Link>
					</span>
					/ About
				</h2>
			</header>

			<main className="product-main ">
				<div className="about-mobile  product-main-cont">
					<div className="about-image product-main-pic">
						<img className="main-img" src="about.jpeg" alt="about-image" />
					</div>
					<div className="about-main-right product-main-right">
						<h2 className="about-h2">Our Story</h2>
						<div className="about-underline"></div>
						<p className="about-para">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
							accusantium sapiente tempora sed dolore esse deserunt eaque
							excepturi, delectus error accusamus vel eligendi, omnis beatae.
							Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
							dolore, obcaecati incidunt sequi blanditiis est exercitationem
							molestiae delectus saepe odio eligendi modi porro eaque in libero
							minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
							ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
							similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
							iste.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
};

export default About;
