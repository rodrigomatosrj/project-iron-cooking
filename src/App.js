import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListCategories from "./components/ListCategories/ListCategories";
import Meal from "./components/Meal/Meal";
import ListMealsCategory from "./components/ListCategories/ListMealsCategory";
import ListIngredients from "./components/ListIngredients/ListIngredients";
import ListMealIngredients from "./components/ListIngredients/ListMealIngredients";
import Search from "./components/Search/Search";
import ListCuisines from "./components/ListCuisines/ListCuisines";
import ListLetters from "./components/ListByLetters/ListLetters";
import ListMealCuisines from "./components/ListCuisines/ListMealCuisines";
import Favorites from "./components/Favorites/Favorites";

import "../src/styles/bootstrap.css";

function App() {
	return (
		<BrowserRouter className="font">
			<Header />
			<Container>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/meal/:id" component={Meal} />
					<Route exact path="/categories" component={ListCategories} />
					<Route exact path="/categories/:id" component={ListMealsCategory} />
					<Route
						exact
						path="/ingredients/:title"
						component={ListMealIngredients}
					></Route>
					<Route exact path="/ingredients" component={ListIngredients}></Route>
					<Route exact path="/search/:querystring" component={Search}></Route>
					<Route exact path="/cuisines" component={ListCuisines}></Route>
					<Route
						exact
						path="/cuisines/:area"
						component={ListMealCuisines}
					></Route>
					<Route exact path="/searchbyletter" component={ListLetters}></Route>
					<Route
						exact
						path="/searchbyletter/:letter"
						component={ListLetters}
					></Route>
					<Route exact path="/favorites" component={Favorites}></Route>
				</Switch>
			</Container>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
