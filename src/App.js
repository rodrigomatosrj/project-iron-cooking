import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import "../src/styles/bootstrap.css";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListCategories from "./components/ListCategories/ListCategories";
import Meal from "./components/Meal/Meal";
import ListMealsCategory from "./components/ListCategories/ListMealsCategory";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Container>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/meal/:id" component={Meal} />
					<Route exact path="/categories" component={ListCategories} />
					<Route exact path="/categories/:id" component={ListMealsCategory} />
				</Switch>
				<Footer />
			</Container>
		</BrowserRouter>
	);
}

export default App;
