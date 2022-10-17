import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.css";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { useDispatch } from 'react-redux'
import { Removefirst } from "../Store/Createdslice";

export default function Navbar() {
  const selected = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  const REMOVE = () => {
    dispatch(Removefirst());
  };
  return (
    <>
      <nav>
        <div className="FLEX flipcard-color">
          <NavLink to="/">
            {" "}
            <div className="logo mt-1 ">
              <img
                src="\assest\flipkart-plus.png"
                alt="Flipcard"
                id="imglogo"
                onClick={() => REMOVE()}
              />
              <NavLink to="/">
                <li>
                  {" "}
                  <span> Explore</span>
                  <span id="pink">plus</span>
                </li>
                {/* <img src="\assest\plus.png" alt="plus" /> */}
              </NavLink>
            </div>
          </NavLink>
          <div className="inputtag">
            <input
              className="form-control me-2"
              type="search"
              placeholder="  Search for Products , brand  and more"
              aria-label="Search"
            />
          </div>
          <div className="flipcard-Card">
            <button type="button" className="Card-design position-relative">
              <NavLink to="/Card">
                <AiOutlineShoppingCart size={35} />
                {/* Cart */}
              </NavLink>
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
