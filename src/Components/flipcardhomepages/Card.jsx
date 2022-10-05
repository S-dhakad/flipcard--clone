import React from "react";
import "./Removecard.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Removecard } from "../Store/Createdslice";
import { NavLink } from "react-router-dom";
export default function Card() {
  const selected = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const REMOVE = (product) => {
    dispatch(Removecard(product));
  };

  return (
    <>
      {" "}
      <div className="container">
        <div className="row">
          {selected.map((product, index) => {
            return (
              <div className="cardremove" key={index}>
                <div className="cardimge">
                  <img src={product.image} alt="" />
                </div>
                <div className="cardprice">
                  <h5>{product.title}</h5>
                  <h5>₹{product.price}</h5>
                </div>
                <div className="cardbtn">
                  <NavLink to="/Addres">
                    <button className="BUYNOW"> BUY NOW</button>
                  </NavLink>
                  <button className="REMOVE" onClick={() => REMOVE(product.id)}>
                    REMOVE NOW
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
