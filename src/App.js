import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";
import Error from "./components/Error/Error";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
	return (
		<>
			<div className="App">
			
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="products" element={<Products />} />
					<Route path="cart" element={<Cart />} />
					<Route path="products/:id" element={<Product />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</div>
		</>
	);
}

export default App;
