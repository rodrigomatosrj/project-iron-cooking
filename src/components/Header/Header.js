import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import SearchForm from "../Search/SearchForm";

function Header() {
	return (
		<header>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">Iron Cooking</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/categories">Categories</Nav.Link>
						<Nav.Link href="/ingredients">Ingredients</Nav.Link>
						<Nav.Link href="/cuisines">Cuisines</Nav.Link>
						<Nav.Link href="/searchbyletter/A">A to Z</Nav.Link>
					</Nav>
					<SearchForm />
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
}

export default Header;
