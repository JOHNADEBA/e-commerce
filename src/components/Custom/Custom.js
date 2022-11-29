import React from "react";
import "./Custom.css";
import { GiDiamondHard, GiNotebook, GiTargeting } from "react-icons/gi";

const Custom = () => {
	const articles = [
		{ name: "Mission", icon: <GiTargeting /> },
		{ name: "Vision", icon: <GiDiamondHard /> },
		{ name: "History", icon: <GiNotebook /> },
	];
	return (
		<div className="custom-cont">
			<div className="custom-top">
				<div className="top-one">
					<p className="custom-left">Custom Furniture</p>
					<p className="custom-left">Built Only For You</p>
				</div>
				<div className="top-two">
					<p className="custom-right">
						Built Only For You Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Saepe dolorum debitis consectetur reprehenderit
						non aliquam voluptates dolore aut vero consequuntur.
					</p>
				</div>
			</div>

			<div className="card-cont">
				{articles.map((article, index) => {
					return (
						<div className="card" key={index}>
                            <div className="custom-icon-cont">
							<p className="custom-icon">{article.icon}</p>
                                
                            </div>
							<p className="custom-name">{article.name}</p>
							<p className="custom-text">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
								velit autem unde numquam nisi
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Custom;
