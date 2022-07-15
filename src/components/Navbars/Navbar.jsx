import { NavLink } from "react-router-dom";

const routes = [
	{
		name: "Ecotria",
		path: "/",
	},
	{
		name: "Productos",
		path: "/productos",
	},
];

const NavItem = (route) => <NavLink to={route.path}>{route.name}</NavLink>;

const Navbar = () => {
	return (
		<ul>
			{routes.map((route, key) => (
				<NavItem key={key} {...route} />
			))}
		</ul>
	);
};

export default Navbar;
