import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: "none",
    };
  };
  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to={"/"}>
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to={"/about"}>
        About
      </NavLink>
      <NavLink style={navLinkStyles} to={"/products"}>
        Products
      </NavLink>
      <NavLink style={navLinkStyles} to={"/profile"}>
        Profile
      </NavLink>
    </nav>
  );
};

export default Navbar;
