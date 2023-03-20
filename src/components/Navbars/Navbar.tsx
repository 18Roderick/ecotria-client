import { NavLink } from "react-router-dom";

type RoutesType = {
  name: string;
  path: string;
};

const routes: RoutesType[] = [
  {
    name: "Ecotria",
    path: "/",
  },
  {
    name: "Productos",
    path: "/products",
  },
];

const NavItem = (route: RoutesType) => <NavLink to={route.path}>{route.name}</NavLink>;

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
