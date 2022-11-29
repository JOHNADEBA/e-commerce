import React from "react";
import "./FeaturedProducts.css";
import { useGlobalContext } from "../../services/context";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
	const { featuredData, getProduct } = useGlobalContext();
	
	
	return (
		<div className="feature-cont">
			<h2 className="feature-header">Featured Products</h2>
			<div className="underline"></div>

			<div className="all-features">
				{featuredData.map((feature) => {
					return (
						<section key={feature.id}>
							<img
								src={feature.image}
								alt={feature.name}
							/>
							<div className="lower">
								<p>{feature.name.charAt(0).toUpperCase() + feature.name.slice(1)}</p>
								<p>${feature.price.toLocaleString('en-US')}</p>
							</div>
							<div className="link-cont">
								<Link
									onClick={() => getProduct(feature.id)}
									className="link"
									to={`/products/${feature.id}`}
								>
									<FaSearch />
								</Link>
							</div>
						</section>
					);
				})}
			</div>
			<div className="feature-btn">
				<Link className="btn " to="/products">
					all products
				</Link>
			</div>
		</div>
	);
};

export default FeaturedProducts;
