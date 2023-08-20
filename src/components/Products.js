import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="search products"></input>
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
        {/* To use Absolute Link  */}
        {/* <Link to="/products/featured">Featured</Link>
        <Link to="/products/new">New</Link> */}
        <Outlet />
      </nav>
    </>
  );
};

export default Products;
