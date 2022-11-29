import React from "react";
import Custom from "../Custom/Custom";
import Design from "../Design/Design";
import FeaturedProducts from "../Featured/FeaturedProducts";
import News from "../News/News";

const Home = () => {
	return (
		<div>
			<Design />
			<FeaturedProducts />
			<Custom />
			<News />
		</div>
	);
};

export default Home;
