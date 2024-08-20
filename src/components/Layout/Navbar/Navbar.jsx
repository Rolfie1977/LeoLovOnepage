// src/components/Layout/Navbar.jsx
import React from "react";
import styles from "./Navbar.module.scss";

function Navbar({ links }) {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<a href="#hjem">Hjem</a>
					</li>{" "}
					|
					<li>
						<a href="#advokaterne">Advokaterne</a>
					</li>
					|
					<li>
						<a href="#om">Om LeoLov</a>
					</li>
					|
					<li>
						<a href="#kontakt">Kontakt</a>
					</li>
				</ul>
			</nav>
			<div class="logo jura">
				<span class="leo">Leo</span>
				<span class="lov">-Lov</span>
			</div>
		</header>
	);
}

export default Navbar;
