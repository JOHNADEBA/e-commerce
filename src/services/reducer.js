export const reducer = (state, action) => {
	if (action.type === "ALL_DATA_AND_FEATURE") {
		return {
			...state,
			featuredData: action.featuredData,
			products: action.products,
			mainProducts: action.mainProducts,
			highestPrice: action.highestPrice,
			price: action.price,
		};
	}
	if (action.type === "SHOW_PIC") {
		return { ...state, showPic: action.payload };
	}
	if (action.type === "CHANGE_MARK") {
		return {
			...state,
			checkProduct: action.payload,
			singleActive: action.singleActive,
		};
	}
	if (action.type === "GET_PRODUCT") {
		return {
			...state,
			product: action.payload,
			showPic: action.payload.images[0].url,
		};
	}
	if (action.type === "ALL_CATEGORY") {
		return {
			...state,
			products: state.mainProducts,
			category: "all",
		};
	}
	if (action.type === "ALL_COMPANY") {
		return {
			...state,
			products: state.mainProducts,
			company: "all",
		};
	}
	if (action.type === "GET_SHIPPING") {
		return {
			...state,
			isShipped: action.payload,
		};
	}
	if (action.type === "GET_CATEGORY") {
		return {
			...state,
			category: action.payload,
		};
	}
	if (action.type === "GET_COMPANY") {
		return {
			...state,
			company: action.payload,
		};
	}
	if (action.type === "GET_COLOR") {
		return {
			...state,
			color: action.payload,
		};
	}
	if (action.type === "GET_PRICE") {
		return {
			...state,
			price: action.payload,
		};
	}
	if (action.type === "CLEAR_ALL_FILTERS") {
		return {
			...state,
			isShipped: false,
			category: "all",
			company: "all",
			color: "All",
			price: state.highestPrice,
			products: state.mainProducts,
		};
	}
	if (action.type === "GET_ALL_CATEGORY_FILTER") {
		return { ...state, products: action.payload };
	}
	if (action.type === "GET_SEARCH") {
		return {
			...state,
			products: action.payload,
		};
	}
	if (action.type === "GET_ADVANCE_SEARCH") {
		return {
			...state,
			products: action.payload.newProducts,
			advancedFilter: action.payload.advancedFilter,
		};
	}
	if (action.type === "NON_GRID") {
		return { ...state, isGrid: false };
	}
	if (action.type === "GRID") {
		return { ...state, isGrid: true };
	}
	if (action.type === "ADD_TO_CART") {
		return { ...state, cartArr:action.payload };
	}
	if (action.type === "CLEAR_CART") {
		return { ...state, cartArr: [] };
	}
	if (action.type === "DELETE_CART") {
		return { ...state, cartArr: action.payload };
	}
	if (action.type === "INCREASE_ITEM") {
		return { ...state, cartArr: action.payload.newCart, product: action.payload.newProduct,};
	}
	if (action.type === "DECREASE_ITEM") {
		return { ...state, cartArr: action.payload.newCart, product: action.payload.newProduct,};
	}
	if (action.type === "GET_TOTAL") {
		return {
			...state,
			totalAmt: action.payload.totalAmt,
			grandTotal: action.payload.grandTotal,
		};
	}
	if (action.type === "GET_EMAIL") {
		return {
			...state,
			email: action.payload,
		};
	}
	if (action.type === "SUBSCRIBE") {
		return {
			...state,
			subscribeMessage: "Subscribed Successfully",
			email: "",
		};
	}
	if (action.type === "UNSUBSCRIBE") {
		return {
			...state,
			subscribeMessage: "",
		};
	}
	if (action.type === "MOBILE_MENU") {
		return {
			...state,
			isMobileMenu: !state.isMobileMenu,
		};
	}
	return state;
};
