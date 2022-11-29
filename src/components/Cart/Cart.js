import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useGlobalContext } from "../../services/context";

const Cart = () => {
	const {
		grandTotal,
		totalAmt,
		clearCart,
		cartArr,
		deleteItem,
		increaseItem,
		decreaseItem,
	} = useGlobalContext();
	
	const tableHeader = ["Item", "Price", "Quantity", "Subtotal", ""];
	if (cartArr.length < 1) {
		return (
			<div className="no-available">
				<h2>Ooops!!! It looks like your cart is empty. </h2>
				<Link to="/products" className="btn">
					START SHOPPING
				</Link>
			</div>
		);
	}
	return (
		<div>
			<header className="product-header">
				<h2 className="product-link">
					<span>
						<Link className="product-link-end" to="/">
							Home{" "}
						</Link>
					</span>
					/ Cart
				</h2>
			</header>

			<main className="cart-big-main">
				<table>
					<thead>
					<tr className="table-margin">
						{tableHeader.map((header, index) => {
							return <th key={index}>{header}</th>;
						})}
					</tr>
					</thead>
					<tbody>
					{cartArr.map((cart) => {
						
						return (
							<tr key={cart.id} className="table-margin">
								<td className="cart-main-img">
									<img src={cart.image || cart.images[0].url} alt={cart.name} />
									<div className="cart-name-color">
										<p className="cart-name">{cart.name}</p>
										<p className="cart-color">
											Color :{" "}
											<span
												style={{
													background: cart.colors[0],
													margin: "1rem .5rem",
													padding: ".01rem .6rem",

													borderRadius: "50%",
												}}
											></span>
										</p>
										<p className="cart-mobile-price">${cart.price.toLocaleString("en-US")}</p>
									</div>
								</td>

								<td className="cart-main-price">
									<div className="cart-main-img">
										<p>${cart.price.toLocaleString("en-US")}</p>
									</div>
								</td>

								<td>
									<div className="plus">
										<button>
											<FaMinus
												onClick={() => decreaseItem(cart.id)}
												className="cart-add-minus"
											/>
										</button>
										<h2 className="count">{cart.order}</h2>
										<button>
											<FaPlus
												onClick={() => increaseItem(cart.id)}
												className="cart-add-minus"
											/>
										</button>
									</div>
								</td>

								<td className="total-price">
									<div className="cart-main-img">
										<p>${cart.subtotal.toLocaleString("en-US")}</p>
									</div>
								</td>
								<td className="trash-cart">
									<FaTrash
										className="trash"
										onClick={() => deleteItem(cart.id)}
									/>
								</td>
							</tr>
						);
					})}</tbody>
				</table>

				<div className="lower-btns">
					<Link className="btn mobile-format" to="/products">
						Continue Shopping
					</Link>

					<button className="btn cart-clear" onClick={clearCart}>
						Clear Shopping Cart
					</button>
				</div>
				<div className="float-cart">
					<article className="cart-article">
						<h5 className="cart-article-flex">
							subtotal :
							<span className="cart-right-amt">
								${totalAmt.toLocaleString("en-US")}
							</span>
						</h5>
						<p className="cart-article-flex">
							shipping fee :<span className="cart-right-amt">$5.34</span>
						</p>
						<hr />
						<h4 className="cart-article-flex  order">
							order total :
							<span className="cart-right-amt">
								{" "}
								${grandTotal.toLocaleString("en-US")}
							</span>
						</h4>
					</article>
					
					<Link to="/login" className="btn cart-login">
						Login
					</Link>
					
				</div>
				<div className="endfloat"></div>
			</main>
		</div>
	);
};

export default Cart;
