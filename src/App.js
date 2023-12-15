import { Routes, Route, Router, Navigate } from "react-router-dom";
import Home from "./components/routerLearning/Home";
import About from "./components/routerLearning/About";
import Navbar from "./components/routerLearning/Navbar";
import Contact from "./components/routerLearning/Contact";
import NotFound from "./components/routerLearning/NotFound";
import { useState } from "react";
import Product from "./components/routerLearning/Product";
import { OrderSummary } from "./components/routerLearning/OrderSummary";
import Products from "./components/routerLearning/Products";
import FeatureProducts from "./components/routerLearning/FeatureProducts";
import NewProducts from "./components/routerLearning/NewProducts";
import Users from "./components/routerLearning/Users";
import UserDetails from "./components/routerLearning/UserDetails";
import Admin from "./components/routerLearning/Admin";

function App() {
	const [cartIsEmpty] = useState(true);
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="about" element={<About />}></Route>
				<Route path="contact" element={<Contact />}></Route>
				<Route path="product" Component={Product}></Route>
				<Route path="*" element={<NotFound />}></Route>
				<Route
					path="/redirect"
					element={<Navigate to="/about" />}
				></Route>
				<Route path="order-summary" element={<OrderSummary />} />

				{/* Products route's Nested routes */}
				<Route path="products" element={<Products />}>
					<Route index element={<FeatureProducts />} />
					<Route path="featured" element={<FeatureProducts />} />
					<Route path="new" element={<NewProducts />} />
				</Route>

				{/* Users and User details */}
				<Route path="users" element={<Users />} >
					<Route path=":userId/:city" element={<UserDetails />} />
					<Route path="admin" element={<Admin/>} />
				</Route>

				<Route
					path="/checkout"
					element={
						cartIsEmpty ? (
							<Navigate to="/product" />
						) : (
							<p>Please go ahead for checkout</p>
						)
					}
				/>
			</Routes>
		</>
	);
}

export default App;
