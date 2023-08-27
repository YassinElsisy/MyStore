import React, { useState } from 'react';
import Cart from "../Cart/Cart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <div className="left">
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="links" to="/category/1">Women</Link>
          </div>
          <div className="item">
            <Link className="links" to="/category/2">Men</Link>
          </div>
          <div className="item">
            <Link className="links" to="/category/3">Kids</Link>
          </div>
          <div className="item">
            <Link className="links" to="/category/4">Accessories</Link>
          </div>
        </div>
        <div className="center">
          <Link className="links" to="/">MyStore</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="links" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="links" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="links" to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchOutlinedIcon />
            <FavoriteBorderIcon />
            <PermIdentityIcon />
            <div className="shopping-icon" onClick={() => setOpen(!open)}>
              <ShoppingBagOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
