import React from "react";
import "./Header.css";
import { BsFillPersonPlusFill, BsFillCartFill } from "react-icons/bs";
import { FaTimes, FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useGlobalContext } from "../../services/context";

const Header = () => {
	const menus = ["home", "about", "products"];
	const { cartArr, showMobileMenu, isMobileMenu } = useGlobalContext();

	return (
		<header>
			<div className="img-header">
				<Link to="/" onClick={showMobileMenu}>
					{" "}
					<img className="right-img" src="logo.svg" alt="logo" />
				</Link>
			</div>

			<ul className="menu">
				{menus.map((menu, index) => {
					return (
						<li key={index}>
							<Link className="li-link" to={menu === "home" ? "/" : menu}>
								{menu.charAt(0).toUpperCase() + menu.slice(1)}
							</Link>
						</li>
					);
				})}
			</ul>

			<div className="right-header">
				<Link to="/cart">
					<div className="right-sub">
						<p className="para-head">Cart</p>
						<div className="icon-top">
							<p className="icon-head">
								<BsFillCartFill />
							</p>
							<p className="added">{cartArr.length}</p>
						</div>
					</div>
				</Link>
				<div className="right-sub">
					<p className="para-head">Login</p>
					<p className="icon-head">
						<BsFillPersonPlusFill />
					</p>
				</div>
			</div>

			{isMobileMenu && (
				<div
					className={isMobileMenu ? "mobile-menu active-menu" : "mobile-menu"}
				>
					<div>
						<p>
							<FaTimes onClick={showMobileMenu} className="mobile-icon times" />
						</p>
					</div>
					<div className="endfloat"></div>

					<ul className="">
						{menus.map((menu, index) => {
							return (
								<li key={index}>
									<Link
										className="li-link"
										to={menu === "home" ? "/" : menu}
										onClick={showMobileMenu}
									>
										{menu.charAt(0).toUpperCase() + menu.slice(1)}
									</Link>
								</li>
							);
						})}
					</ul>

					<div className="mobile-below">
						<Link to="/cart" onClick={showMobileMenu}>
							<div className="right-sub">
								<p className="para-head">Cart</p>
								<div className="icon-top">
									<p className="icon-head">
										<BsFillCartFill />
									</p>
									<p className="added">{cartArr.length}</p>
								</div>
							</div>
						</Link>
						<div className="right-sub">
							<p className="para-head">Login</p>
							<p className="icon-head">
								<BsFillPersonPlusFill />
							</p>
						</div>
					</div>
				</div>
			)}

			<div>
				{!isMobileMenu && (
					<FaBars onClick={showMobileMenu} className="mobile-icon" />
				)}
			</div>
		</header>
	);
};

export default Header;
