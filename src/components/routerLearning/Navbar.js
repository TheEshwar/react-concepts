import { Button, Stack } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();
    const navStyle =({isActive})=> {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
            margin: "10px",
            padding: "10px"
        }
    }

	return (
		<nav>
			<Stack direction="row" spacing={2} margin={2} color="">
				<NavLink style={navStyle} to="/">Home</NavLink>
				<NavLink style={navStyle} to="about">About</NavLink>
				<NavLink style={navStyle} to="contact">Contact</NavLink>
				<NavLink style={navStyle} to="products">Products</NavLink>
			</Stack>
				<Button onClick={() => navigate("/contact")}>
					Navigate to Contact
				</Button>
		</nav>
	);
}
