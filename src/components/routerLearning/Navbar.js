import { Button, Stack } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export default function Navbar() {
	const navigate = useNavigate();
	const navStyle = ({ isActive }) => {
		return {
			fontWeight: isActive ? "bold" : "normal",
			textDecoration: isActive ? "none" : "underline",
			margin: "10px",
			padding: "10px",
		};
	};

	const auth = useAuth();

	return (
		<nav>
			<Stack direction="row" spacing={2} margin={2}>
				<NavLink style={navStyle} to="/">
					Home
				</NavLink>
				<NavLink style={navStyle} to="about">
					About
				</NavLink>
				<NavLink style={navStyle} to="contact">
					Contact
				</NavLink>
				<NavLink style={navStyle} to="products">
					Products
				</NavLink>
				<NavLink style={navStyle} to="users">
					Users
				</NavLink>
				<NavLink style={navStyle} to="profile">
					Profile
				</NavLink>
				{!auth.user && (
					<NavLink style={navStyle} to="login">
						Login
					</NavLink>
				)}
			</Stack>
			<Button onClick={() => navigate("/contact")}>
				Navigate to Contact
			</Button>
		</nav>
	);
}
