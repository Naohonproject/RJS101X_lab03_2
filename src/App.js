/** @format */

import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import "./App.css";
class App extends Component {
	render() {
		return (
			<div>
				<Navbar dark color="primary">
					<div className="container"></div>
					<NavbarBrand href="/">Some code here</NavbarBrand>
				</Navbar>
				<Menu name="ltb" />
			</div>
		);
	}
}

export default App;
