import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => {
  return (
    <Navbar className="navbar navbar-expand-md bg-dark">
      <h3 className="text-light">Shopping Cart</h3>
      <div>
        <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active" aria-current="page">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/newproduct" className="nav-link" aria-current="page">
              New Product
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/productlist" className="nav-link" aria-current="page">
              Product List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" aria-current="page">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};

export default Nav;
