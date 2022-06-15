import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-sm-3 pt-3 pb-2" id="home">
      <div className="container">
        <div className="top-w3pvt d-flex">
          <div id="logo">
            <h1>
              {" "}
              <Link to="/">
                <span className="log-w3pvt">B</span>aggage
              </Link>{" "}
              <label className="sub-des">Online Store</label>
            </h1>
          </div>

          <div className="forms ml-auto">
            <Link className="btn" to="/login">
              <span className="fa fa-user-circle-o"></span> Sign In
            </Link>
            <Link to="/register" className="btn">
              <span className="fa fa-pencil-square-o"></span> Sign Up
            </Link>
          </div>
        </div>
        <div className="nav-top-wthree">
          <nav>
            <label for="drop" className="toggle">
              <span className="fa fa-bars"></span>
            </label>
            <input type="checkbox" id="drop" />
            <ul className="menu">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <label for="drop-2" className="toggle">
                  Dropdown{" "}
                  <span className="fa fa-angle-down" aria-hidden="true"></span>
                </label>
                <Link to="/">
                  Dropdown{" "}
                  <span className="fa fa-angle-down" aria-hidden="true"></span>
                </Link>
                <input type="checkbox" id="drop-2" />
                <ul>
                  <li>
                    <a href="/coming.html" className="drop-text">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/about.html" className="drop-text">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="/single.html" className="drop-text">
                      Single Page
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/shop">Collections</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="search-form ml-auto">
            <div className="form-w3layouts-grid">
              <form action="#" method="post" className="newsletter">
                <input
                  className="search"
                  type="search"
                  placeholder="Search here..."
                  required=""
                />
                <button className="form-control btn" value="">
                  <span className="fa fa-search"></span>
                </button>
              </form>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
