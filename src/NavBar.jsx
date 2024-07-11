import { Link, NavLink } from "react-router-dom";

function NavBar() {
	return (
		<nav>
			<NavLink to="/Home/" activeClassName="active" className="navLink">
				Home
			</NavLink>
			<NavLink
				to="/BrowseCharacters/"
				activeClassName="active"
				className="navLink"
			>
				Browse Characters
			</NavLink>
			<NavLink to="/Comics/" activeClassName="active" className="navLink">
				Comics
			</NavLink>
		</nav>
	);
}

export default NavBar;
