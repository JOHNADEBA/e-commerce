import React, { useContext, useEffect, useReducer } from "react";

import { reducer } from "./reducer";

const AppContext = React.createContext();

const initialState = {
	product: [],
	products: [],
	mainProducts: [],
	featuredData: [],
	checkProduct: "",
	singleActive: false,
	showPic: `https://picsum.photos/200/300?random=1`,
	isShipped: false,
	category: "all",
	company: "all",
	color: "All",
	price: 0,
	search: "",
	highestPrice: 0,
	advancedFilter: "low",
	isGrid: true,
	cartArr: [],
	totalAmt: 0,
	grandTotal: 0,
	email: "",
	subscribeMessage: "",
	isMobileMenu: false,
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getAllData = async () => {
		const response = await fetch("https://course-api.com/react-store-products");
		const data = await response.json();
		for (let b = 0; b < data.length; b++) {
			data[b] = { ...data[b], order: 1, subtotal: data[b].price };
		}
		const featured = await data.filter((feat) => feat.featured);

		const topPrice = data.reduce(
			(acc, max) => (acc = acc > max.price ? acc : max.price),
			0
		);
		dispatch({
			type: "ALL_DATA_AND_FEATURE",
			products: data.sort((a, b) => (a.price > b.price ? 1 : -1)),
			mainProducts: data,
			featuredData: featured,
			price: topPrice,
			highestPrice: topPrice,
		});
	};

	const changePic = (newPic) => {
		dispatch({ type: "SHOW_PIC", payload: newPic });
	};

	const changeMark = (data) => {
		// let updateMark = !state.singleActive;
		dispatch({ type: "CHANGE_MARK", payload: data, singleActive: true });
	};

	const getProduct = async (id) => {
		const response = await fetch(
			`https://course-api.com/react-store-single-product?id=${id}`
		);
		const data = await response.json();

		data["order"] = 1;
		data["subtotal"] = data.price;

		dispatch({
			type: "GET_PRODUCT",
			payload: data,
		});
	};

	const getFilterCategories = (data) => {
		if (data === "all") {
			dispatch({ type: "ALL_CATEGORY" });
			return;
		}

		dispatch({ type: "GET_CATEGORY", payload: data });
	};

	const getCompany = (data) => {
		if (data === "all") {
			dispatch({ type: "ALL_COMPANY" });
			return;
		}

		dispatch({ type: "GET_COMPANY", payload: data });
	};

	const handleRangeChange = (data) => {
		dispatch({ type: "GET_PRICE", payload: Number(data.replace(/\D/g, "")) });
	};

	const clearAllFilters = () => {
		dispatch({ type: "CLEAR_ALL_FILTERS" });
	};

	const getFilterShipping = (data) => {
		dispatch({ type: "GET_SHIPPING", payload: data });
	};

	const getColor = (data) => {
		console.log(data);
		dispatch({ type: "GET_COLOR", payload: data });
	};

	const getSelectedMenu = () => {
		const newFilter = state.mainProducts.filter(function (newArr) {
			return (
				(state.category === "all"
					? newArr.category
					: newArr.category === state.category) &&
				(state.company === "all"
					? newArr.company
					: newArr.company === state.company) &&
				(state.color === "All"
					? newArr.colors
					: newArr.colors.includes(state.color)) &&
				newArr.price <= state.price
			);
		});
		dispatch({
			type: "GET_ALL_CATEGORY_FILTER",
			payload: newFilter.sort((a, b) => (a.price > b.price ? 1 : -1)),
		});
	};
	const getSeletedShipped = () => {
		if (!state.isShipped) {
			getSelectedMenu();
			return;
		}
		const newFilter = state.products.filter(
			(newArr) => "shipping" in newArr && newArr.shipping === true
		);

		dispatch({ type: "GET_ALL_CATEGORY_FILTER", payload: newFilter });
	};
	const getSearch = (data) => {
		console.log(data);
		if (data === "") return getSelectedMenu();

		let newSearch = state.mainProducts.filter((product) =>
			product.name.toLowerCase().includes(data.toLowerCase())
		);

		dispatch({ type: "GET_SEARCH", payload: newSearch });
	};
	const getAdvanceFilter = (data) => {
		let newProducts = [];
		if (data === "low") {
			newProducts = state.products.sort((a, b) => (a.price > b.price ? 1 : -1));
		}
		if (data === "high") {
			newProducts = state.products.sort((a, b) => (b.price > a.price ? 1 : -1));
		}

		if (data === "name-accend") {
			newProducts = state.products.sort((a, b) => (a.name > b.name ? 1 : -1));
		}
		if (data === "name-decend") {
			newProducts = state.products.sort((a, b) => (b.name > a.name ? 1 : -1));
		}

		dispatch({
			type: "GET_ADVANCE_SEARCH",
			payload: { newProducts, advancedFilter: data },
		});
	};
	const getNonGrid = () => {
		dispatch({ type: "NON_GRID" });
	};
	const getGrid = () => {
		dispatch({ type: "GRID" });
	};
	const addToCart = (data) => {
		let getCartArr = state.cartArr;
		const available = getCartArr.find((item) => item.id === data.id);
		if (!available) {
			getCartArr.push(data);
			dispatch({ type: "ADD_TO_CART", payload: getCartArr });
			
		} else {
			const getFromProducts = state.cartArr.map((item) => {
				if (item.id === data.id) {
					let newOrder = item.order ;

					return { ...item, order: newOrder, subtotal: newOrder * item.price };
				}
				return item;
			});
			dispatch({ type: "ADD_TO_CART", payload: getFromProducts });
		}
	};
	const clearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};
	const deleteItem = (id) => {
		const newCartArr = state.cartArr.filter((newCart) => newCart.id !== id);
		dispatch({ type: "DELETE_CART", payload: newCartArr });
	};
	const increaseItem = (id) => {
		let newOrder;
		const getFromCartsArr = state.cartArr.find((cart) => cart.id === id);

		if (!getFromCartsArr) {
			const getFromProducts = state.products.find((cart) => cart.id === id);
			let newProduct = state.product;
			if (newProduct.order === newProduct.stock) {
				newProduct.order = newProduct.stock;
			} else newProduct.order = newProduct.order + 1;

			newProduct.subtotal = newOrder * newProduct.price;

			let newCart = state.cartArr;
			newCart.push(getFromProducts);

			dispatch({ type: "INCREASE_ITEM", payload: { newCart, newProduct } });
		} else {
			let newProduct = state.product;
			const newCart = state.cartArr.map((cart) => {
				let newOrder;
				if (newProduct.order === cart.stock) {
					newProduct.order = cart.stock;
				}
				if (newProduct.order !== cart.stock) {
					newProduct.order = cart.order + 1;
				}
				newProduct.subtotal = newProduct.order * newProduct.price;
				if (cart.id === id) {
					if (cart.order === cart.stock) {
						newOrder = cart.stock;
					} else {
						newOrder = cart.order + 1;
					}

					return { ...cart, order: newOrder, subtotal: newOrder * cart.price };
				}

				return cart;
			});
			dispatch({ type: "INCREASE_ITEM", payload: { newCart, newProduct } });
		}
	};
	const decreaseItem = (id) => {
		const newCart = state.cartArr.map((cart) => {
			let newOrder;
			if (cart.id === id) {
				if (cart.order <= 1) {
					newOrder = 1;
				} else {
					newOrder = cart.order - 1;
				}
				return { ...cart, order: newOrder, subtotal: newOrder * cart.price };
			}
			return cart;
		});

		let newProduct = state.product;
		if (newProduct.order <= 1) {
			newProduct.order = 1;
		} else {
			newProduct.order = newProduct.order - 1;
		}
		
		dispatch({ type: "DECREASE_ITEM", payload: { newCart, newProduct } });
	};
	const getTotal = () => {
		let total = 0;
		state.cartArr.forEach((item, i) => {
			total += item.subtotal;
		});
		dispatch({
			type: "GET_TOTAL",
			payload: { totalAmt: total, grandTotal: total + 5.34 },
		});
	};

	const handleEmailChange = (data) => {
		dispatch({ type: "GET_EMAIL", payload: data });
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch({ type: "SUBSCRIBE" });
		setTimeout(() => {
			dispatch({ type: "UNSUBSCRIBE" });
		}, 3000);
		document.getElementById("email-form").reset();
	};

	const showMobileMenu = () => {
		dispatch({ type: "MOBILE_MENU" });
	};

	useEffect(() => {
		getAllData();
	}, []);

	useEffect(() => {
		getSeletedShipped();
	}, [state.isShipped, ]);

	useEffect(() => {
		getSelectedMenu();
	}, [state.category, state.color, state.price, state.company, ]);

	useEffect(() => {
		getTotal();
	}, [state.cartArr, ]);

	return (
		<AppContext.Provider
			value={{
				...state,
				changePic,
				showMobileMenu,
				handleSubmit,
				handleEmailChange,
				deleteItem,
				increaseItem,
				changeMark,
				getProduct,
				getFilterCategories,
				getFilterShipping,
				clearAllFilters,
				getAdvanceFilter,
				getCompany,
				getColor,
				getSearch,
				decreaseItem,
				handleRangeChange,
				getNonGrid,
				getGrid,
				addToCart,
				clearCart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, AppContext };
