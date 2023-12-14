import React from "react";
import { Link } from "react-router-dom";


function Products() {
	return (
		<>
			<input type="search" placeholder="search products" />
            <nav className="productsNav">
                <Link to="featured">Featured</Link>
                <Link to="new">New</Link>
            </nav>
		</>
	);
}

export default Products;
