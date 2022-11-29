import React from "react";
import "./Product.css";
import { FaPlus, FaMinus, FaStar, FaRegStar, FaCheck } from "react-icons/fa";
import { useGlobalContext } from "../../services/context";
import { Link } from "react-router-dom";

const Product = () => {
	const {
		changePic,
		showPic,
		checkProduct,
		changeMark,
		singleActive,
		product,
		addToCart, increaseItem, decreaseItem
	} = useGlobalContext();
	

	return (
		<div className="product-cont">
			<header className="product-header">
				<h2 className="product-link">
					<Link to="/" className="product-link-end">
						{" "}
						Home /{" "}
					</Link>
					<Link to="/products" className="product-link-end">
						{" "}
						Products{" "}
					</Link>
					/ {product.name}
				</h2>
			</header>

			{Object.keys(product).length > 0 && (
				<main className="product-main">
					<Link to="/products" className="btn">
						{" "}
						BACK TO PRODUCTS
					</Link>

					<div className="product-main-cont">
						<div className="product-main-pic">
							<img className="main-img" src={showPic} alt={product.name} />
							<div className="sub-img">
								{product.images.map((img, i) => {
									return (
										<img
											key={i}
											className="sub-img-img"
											src={img.url}
											alt={img.filename}
											onClick={() => changePic(img.url)}
										/>
									);
								})}
							</div>
						</div>
						<div className="product-main-right">
							<h2 className="product-main-name">
								{product.name}
							</h2>
							<div className="product-main-review-cont">
								{[...Array(5)].map((item, index) => {
									return index + 1 <= product.stars ? (
										<FaStar key={index} className="stars" />
									) : (
										<FaRegStar key={index} className="stars" />
									);
								})}
								<p className="product-main-review">
									({product.reviews} customer review{product.reviews > 1 && "s"}
									)
								</p>
							</div>
							<p className="product-main-price">
								${product.price.toLocaleString("en-US")}.00
							</p>
							<p className="product-main-info">
								{product.description.charAt(0).toUpperCase() +
									product.description.slice(1)}
							</p>
							<div className="product-main-info-sub-cont">
								<p className="product-main-info-sub">Available : </p>
								<p className="product-main-info-store">
									{product.available ? "In Stock" : "Out Of Stock"}
								</p>
							</div>

							<div className="product-main-info-sub-cont">
								<p className="product-main-info-sub">SKU : </p>
								<p className="product-main-info-store">{product.id}</p>
							</div>

							<div className="product-main-info-sub-cont">
								<p className="product-main-info-sub">Brand : </p>
								<p className="product-main-info-store">
									{product.company.charAt(0).toUpperCase() +
										product.company.slice(1)}
								</p>
							</div>

							<div className="product-main-info-color">
								<p className="product-main-info-sub">Colors : </p>
								{product.colors.map((color, i) => {
									return (
										<div
											key={i}
											onClick={() => changeMark(color)}
											style={{
												background: color,
												height: "2rem",
												borderRadius: "50%",
												width: "2rem",
												cursor: "pointer",
												position: "relative",
												marginRight: "1rem",
											}}
										>
											{checkProduct === color && singleActive && (
												<FaCheck className="check" />
											)}
										</div>
									);
								})}
							</div>

							<div className="product-main-btn">
								<button>
									<FaMinus  onClick={() => decreaseItem(product.id)} />
								</button>
								<h2>{product.order}</h2>
								<button  >
								{/* I NEED TO CREATE A NEW FUNC */}
									<FaPlus onClick={() => increaseItem(product.id)} />
								</button>
							</div>
							<Link to="/cart" 
							onClick={()=>addToCart(product)} className="btn">
						
						ADD TO CART
					</Link>
						</div>
					</div>
				</main>
			)}
		</div>
	);
};

export default Product;
