import React from "react";
import { Link } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons-react";

const Header = () => {
  return (
    <div className="d-flex header w-100">
      <ul className="nav justify-content-center  w-100">
        <li className="nav-item">
          <Link className="nav-link " to={"/home"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/men"}>
            Men
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/women"}>
            Women
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/about"}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"./contact-us"}>
            Contact-us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"./cart"}>
            <div className="position-relative">
              <IconShoppingCart />
              <span className="position-absolute cart-items">1</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;