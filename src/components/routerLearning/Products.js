import React from "react";
import { Link, Outlet } from "react-router-dom";


function Products() {
	return (
		<>
			<input type="search" placeholder="search products" />
            <nav className="productsNav">
                <Link to="featured">Featured</Link>
                <Link to="new">New</Link>
            </nav>
            <Outlet/>
		</>
	);
}

export default Products;
