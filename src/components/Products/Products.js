import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../services/context";
import { FaSearch, FaCheck } from "react-icons/fa";
import { FiGrid, FiMenu } from "react-icons/fi";

const Products = () => {
	const {
		products,
		search,
		getProduct,
		mainProducts,
		getFilterCategories,
		highestPrice,
		getFilterShipping,
		clearAllFilters,
		getCompany,
		getAdvanceFilter,
		advancedFilter,
		getColor,
		handleRangeChange,
		getSearch,
		isGrid,
		getNonGrid,
		getGrid,
		isShipped,
		category,
		company,
		color,
		price,
	} = useGlobalContext();

	const allCategories = [
		"all",
		...new Set(mainProducts.map((cat) => cat.category)),
	];

	const allCompany = [
		"All",
		...new Set(mainProducts.map((comp) => comp.company)),
	];

	const getAllColors = mainProducts.map((comp) => comp.colors);
	let allColors = [];
	for (let i = 0; i < getAllColors.length; i++) {
		for (let j = 0; j < getAllColors[i].length; j++) {
			allColors.push(getAllColors[i][j]);
		}
	}
	allColors = ["All", ...new Set(allColors)];

	return (
		<div>
			<header className="product-header">
				<h2 className="product-link">
					<span>
						<Link className="product-link-end" to="/">
							Home{" "}
						</Link>
					</span>
					/ Products
				</h2>
			</header>

			<main className="products-main">
				<div className="products-main-left">
					<input
						type="text"
						className="products-search"
						placeholder="Search..."
						onChange={(event) => getSearch(event.target.value)}
					/>

					<div>
						<h2 className="products-left-header">Category</h2>
						<div>
							{allCategories.map((btn, index) => {
								return (
									<button
										onClick={() => getFilterCategories(btn)}
										className={
											category === btn
												? "category-active categories"
												: "categories"
										}
										key={index}
									>
										{btn}
									</button>
								);
							})}
						</div>
					</div>

					<div>
						<h2 className="products-left-header">Company</h2>
						<select
							name=""
							id=""
							value={company}
							onChange={(e) => getCompany(e.target.value)}
							className="products-search"
						>
							{allCompany.map((btn, index) => {
								return <option key={index}>{btn.toLowerCase()}</option>;
							})}
						</select>
					</div>

					<div>
						<h2 className="products-left-header">Colors</h2>
						<div className="products-colors-cont">{allColors.map((btn, index) => {
							return (
								<button
									className={
										btn === "All" && color === "All"
											? "category-active all-btn"
											: btn === "All"
											? "all-btn"
											: "other-btn"
									}
									style={{
										background: btn,
									}}
									key={index}
									onClick={() => getColor(btn)}
								>
									{btn === "All" && btn}
									{btn !== "All" && color === btn && (
										<FaCheck className={color === btn && "check-mark"} />
									)}
								</button>
							);
						})} </div>
					</div>

					<div>
						<h2 className="products-left-header">Price</h2>
						<p className="range">${price.toLocaleString("en-US")} </p>
						<input
							type="range"
							min="0"
							max={highestPrice}
							value={price}
							onChange={(e) => handleRangeChange(e.target.value)}
						/>
					</div>
					<div className="ship">
						<label htmlFor="ship">Free Shipping</label>
						<input
							type="checkbox"
							id="ship"
							name="ship"
							checked={isShipped}
							onChange={(e) => getFilterShipping(e.target.checked)}
						/>
					</div>
					<div>
						<button onClick={() => clearAllFilters()} className="btn">
							Clear Filters
						</button>
					</div>
				</div>

				<div className="products-main-right">
					<div className="products-main-top-cont">
						<div className="products-main-top-left">
							<button className="joggle-icon-btn">
								{" "}
								<FiGrid
									onClick={getGrid}
									className={
										isGrid
											? "products-icon products-icon-active"
											: "products-icon"
									}
								/>
							</button>
							<button className="joggle-icon-btn">
								{" "}
								<FiMenu
									onClick={getNonGrid}
									className={
										!isGrid
											? "products-icon products-icon-active"
											: "products-icon"
									}
								/>{" "}
							</button>
						</div>
						<div className="products-main-top-mid">
							<p>
								{products.length} Product{products.length > 1 && "s"} Found
							</p>
							<div className="product-underline"></div>
						</div>

						<div className="products-main-top-right">
							<p>Sort By</p>
							<select
								name=""
								id=""
								onChange={(e) => getAdvanceFilter(e.target.value)}
								value={advancedFilter}
							>
								<option value="low">Price(Lowest)</option>
								<option value="high">Price(Highest)</option>
								<option value="name-accend">Name(A - Z)</option>
								<option value="name-decend">Name(Z - A)</option>
							</select>
						</div>
					</div>
					<div className={isGrid ? "all-features all-products" : ""}>
						{products.map((feature) => {
							return (
								<section
									key={feature.id}
									className={!isGrid ? "inactive-grid" : "mobile-product-sect"}
								>
									<img
										className={!isGrid ? "inactive-grid-img" : ""}
										src={feature.image}
										alt={feature.name}
									/>
									{!isGrid && (
										<div className="inactive-grid-right">
											<p className="inactive-grid-name"
												style={{
													textTransform: "capitalize",
													fontWeight: "bold",
													marginTop: 0,
												}}
											>
												{feature.name}
											</p>
											<p className="inactive-grid-price">
												${feature.price.toLocaleString("en-US")}
											</p>
											<p className="inactive-grid-desc">
												{feature.description.substring(0, 150)}...
											</p>
											<Link
												onClick={() => getProduct(feature.id)}
												to={`/products/${feature.id}`}
												className="btn inactive-grid-btn"
											>
												DETAILS
											</Link>
										</div>
									)}

									{isGrid && (
										<div className="lower">
											<p style={{ textTransform: "capitalize" }}>
												{feature.name}
											</p>
											<p>${feature.price.toLocaleString("en-US")}</p>
										</div>
									)}
									{isGrid && (
										<div className="link-cont">
											<Link
												onClick={() => getProduct(feature.id)}
												className="link"
												to={`/products/${feature.id}`}
											>
												<FaSearch />
											</Link>
										</div>
									)}
								</section>
							);
						})}
					</div>
				</div>
			</main>
		</div>
	);
};

export default Products;
