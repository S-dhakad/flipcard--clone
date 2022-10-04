import React from "react";
import {
  NavLink
} from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.css";
export default function Navbar() {
  const selected = useSelector((state) => state.counter);
  return (
    <>
      <nav>
        <div className="FLEX flipcard-color">
          <NavLink to="/">  <div className="logo mt-1 ">
            <img src="\assest\flipkart-plus.png" alt="Flipcard" id="imglogo" />
            <NavLink to="/">
              <span> Explore</span>
              <span id="pink">plus</span>
              {/* <img src="\assest\plus.png" alt="plus" /> */}
            </NavLink>
          </div>
          </NavLink>
          <div className="Flipcard-input">
            <input
              className="form-control"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
            />
          </div>

          {/* <div className="flipcard-login">
            <button type="button" class="btn-design">
              Login
            </button>
          </div> */}

          {/* <div className="flipcard-seller">
            <button type="button" class="seller-design">
              Become a seller
            </button>
          </div> */}

          <div className="flipcard-Card">
            <button type="button" className="Card-design position-relative">
              <NavLink to="/Card"> Card</NavLink>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {selected.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
