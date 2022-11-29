import React from "react";
import "./Design.css";
import { Link } from "react-router-dom";

const Design = () => {
	return (
		<div className="design-cont">
			<div className="design-left">
				<h2>Design Your</h2>
				<h2 className="last-header"> Comfort Zone</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
					sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
					aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
					alias?
				</p>

				<Link className="btn " to="/products">
					shop now
				</Link>
			</div>
			<div className="design-right">
				<img
					className="right-small"
					src="hero-bcg-small.jpeg"
					alt="left-design"
				/>
				<div className="endfloat"></div>
				<img
					className="right-big"
					src="hero-bcg.big.jpeg"
					alt="right-design"
				/>
			</div>
		</div>
	);
};

export default Design;
