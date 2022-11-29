import React from "react";
import { useGlobalContext } from "../../services/context";

import "./News.css";
const News = () => {
	const { subscribeMessage, handleSubmit, handleEmailChange, email } =
		useGlobalContext();
	return (
		<div className="news-cont">
			<h3>Join our newsletter and get 20% off</h3>
			<div className="news-bottom">
				<p className="news-left">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
					unde quaerat ratione soluta veniam provident adipisci cumque eveniet
					tempore?
				</p>

				<form onSubmit={handleSubmit} className="news-btn-input" id="email-form">
					{subscribeMessage !== "" && (
						<p className="subscribe">{subscribeMessage}</p>
					)}
					<input
						type="email"
						placeholder="Enter Email"
						className="news-input"
						onChange={(e) => handleEmailChange(e.target.value)}
					/>
					<button type="submit" className="news-btn">
						Subscribe
					</button>
				</form>
			</div>
		</div>
	);
};

export default News;
