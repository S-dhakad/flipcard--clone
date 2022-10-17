/* eslint-disable jsx-a11y/alt-text */
import "./userproduction.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import mydata from "../flipcarddata/Flipcarddata.json";
import { Addcard, Removefirst } from "../Store/Createdslice";
import { useDispatch } from "react-redux";
export default function Userproductview() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.counter);
  const [handlerapi, sethandlerapi] = useState([]);

  const Adduserdata = (product) => {
    dispatch(Removefirst(product));
    dispatch(Addcard(product));
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
    return product;
  };

  const Buynow = () => {
    navigate("/Addres");
  };

  useEffect(() => {
    sethandlerapi(mydata);
  }, []);

  return (
    <>
      {selected.length === 1 ? (
        <div>
          <div className="container-fluid">
            <div className="row">
              {selected.map((product, index) => {
                return (
                  <div
                    className="card mb-3 border-0"
                    key={index}
                    style={{ width: "98%" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4 sidenav">
                        <img
                          src={product.image}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                        <div className="paymentbutton">
                          <div className="Addtocard"></div>

                          <ul className="row gap-2">
                            <li className="col col-6 col-12">
                              {" "}
                              <NavLink to="/Card">
                                {" "}
                                <button className="btnaddcard">
                                  Add to Card
                                </button>{" "}
                              </NavLink>
                            </li>
                            <li className="col col-6 col-12">
                              <button
                                className="btnbuy"
                                onClick={() => Buynow()}
                              >
                                BUY NOW
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        className="col-md-8 overflow-auto mt-5 "
                        style={{ height: "500px" }}
                      >
                        <div className="card-body border-0 ">
                          <h2 className="card-title">{product.title}</h2>
                          <div className="rating"> 4.5</div>{" "}
                          <span className="Ratinginformation">
                            3,352 Ratings & 156 Reviews{" "}
                            <img
                              src="\assest\fasured.png"
                              style={{ width: "10%" }}
                            />{" "}
                          </span>
                          <span className="Extraoffer">Extra ₹3000 off</span>
                          <h3 className="card-text">₹ {product.price}</h3>
                          <ul>+ ₹29 Secured Packaging Fee</ul>
                          <div className="availableroffer">
                            Available offers
                          </div>
                          <div>
                            <span className="imagrhandler">
                              <img src="\assest\bankoffer.webp" />{" "}
                            </span>{" "}
                            Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
                            <div>
                              {" "}
                              <span className="imagrhandler">
                                <img src="\assest\bankoffer.webp" />{" "}
                              </span>{" "}
                              Special PriceGet extra ₹3000 off (price inclusive
                              of cashback/coupon)T&C
                            </div>
                            <div>
                              <span className="imagrhandler">
                                <img src="\assest\bankoffer.webp" />{" "}
                              </span>{" "}
                              Partner OfferSign up for Flipkart Pay Later and
                              get Flipkart Gift Card worth upto ₹1000*Know More
                            </div>
                            <div>
                              <span className="imagrhandler">
                                <img src="\assest\bankoffer.webp" />{" "}
                              </span>{" "}
                              No cost EMI ₹4,667/month. Standard EMI also
                              available{" "}
                            </div>
                          </div>
                          <p className="">
                            <small className="text-muted">
                              {product.description}
                            </small>
                          </p>
                          <div className="supercoin">
                            <img src="\assest\supercoin2.webp" />{" "}
                          </div>
                          <div className="Description">
                            <div className="Descriptiontitler">Description</div>
                            <div className="Descriptioninformation">
                              Discover new perspectives and take advantage of
                              seamless performance with the Redmi Note 11 SE,
                              which is packed with a number of exceptional
                              features. The Helio G95 HyperEngine Game
                              Technology, which powers this phone, enables
                              spectacular gameplay and outstanding graphic
                              quality. Also offering stutter-free streaming and
                              fluid navigation is its 16.33 cm (6.42) Super
                              AMOLED display. Moreover, the 64 MP quad-camera
                              setup and 13 MP selfie camera on this smartphone
                              provide speedy image processing while capturing
                              stunning landscapes all around you.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="horizontal-slider-container">
            <ul className="horizonal-slider">
              <li className="item">
                {handlerapi.map((product, index) => {
                  return (
                    <div style={{ width: "100%" }}>
                      <div key={index}>
                        <img
                          src={product.image}
                          onClick={() => Adduserdata(product)}
                          className="card-img-top imghandler rounded mx-auto d-block"
                          alt="..."
                          style={{ width: "100px" }}
                        />
                        <div className="card-body">
                          <h6 className="card-text">{product.title}</h6>
                          <p className="card-title">
                            ₹ {product.price}{" "}
                            <span>
                              {" "}
                              <img
                                src="\assest\fasured.png"
                                style={{ width: "50%" }}
                              />{" "}
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
      ) : (
        dispatch(Removefirst())
      )}
    </>
  );
}
