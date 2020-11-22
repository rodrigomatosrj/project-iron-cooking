import React from "react";
import SearchForm from "./SearchForm.js";
import {NavLink,Link} from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<NavLink className="nav-link" to="/">
						Home
					</NavLink>
					<NavLink className="nav-link" to="/categories">
						Categories  
					</NavLink>
				</ul>
				<SearchForm />
			</div>
		</nav>
	);


		
	
	
}

export default Navbar;
