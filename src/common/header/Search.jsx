import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Search = ({ cartItem }) => {
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span
              style={{
                fontSize: 12,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              All Category
            </span>
          </div>

          <div className="icon f_flex width">
            <Link to="/login">
              <i className="fa fa-user icon-circle"> </i>
            </Link>

            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
