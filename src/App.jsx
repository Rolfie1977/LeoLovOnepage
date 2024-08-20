// src/App.jsx
import React from "react";
import Navbar from "./components/Layout/Navbar/Navbar";
import Home from "./sections/Home/home";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Layout/Footer/Footer";

const App = () => {
	const navLinks = [
		{ href: "#home", label: "Home" },
		{ href: "#about", label: "About" },
		{ href: "#services", label: "Services" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<div>
			<Home />
			<About />
			<Services />
			<Contact />
			<Footer></Footer>
		</div>
	);
};

export default App;
