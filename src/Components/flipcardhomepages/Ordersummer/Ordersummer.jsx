import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Ordersummer() {
  const selected = useSelector((state) => state.counter);
  const navigate = useNavigate();
  const Buynow = () => {
    navigate("/ALLPAYMENT");
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="container">
        <ul id="progressbar-1" className="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
          <li className="step0 active" id="step1">
            <span style={{ marginLeft: "22px", marginTop: "12px" }}>
              Address
            </span>
          </li>
          <li className="step0  text-center active" id="step2">
            <span>Order Summary</span>
          </li>
          <li className="step0 text-muted text-end " id="step3">
            <span style={{ marginRight: "22px" }}>Payment</span>
          </li>
        </ul>
      </div>

      <div className="container-fluid">
        <div className="row d-flex justify-content-end">
          {selected.map((product, index) => {
            return (
              <div className="col-xs-6 col-md-4 col-lg-3">
                <div className="card" key={index}>
                  <img
                    src={product.image}
                    className="card-img-top imghandler rounded mx-auto d-block"
                    alt="..."
                    style={{ width: "100px" }}
                  />
                  <div className="card-body">
                    <h6 className="card-text">{product.title}</h6>
                    <h5 className="card-title">
                      ₹ {product.price}{" "}
                      <span>
                        {" "}
                        <img
                          src="\assest\fasured.png"
                          style={{ width: "40%" }}
                        />{" "}
                      </span>{" "}
                    </h5>
                    <p className="card-text">{product.description}</p>
                    {/* <button type="button" className="btn btn-primary" onClick={() => dispatch(Addcard(product))} >Add to Card</button> */}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="col-md-8 overflow-auto  " style={{ height: "500px" }}>
            <div className="card-body border-0 ">
              <h2 className="card-title"></h2>
              <div className="rating"> 4.5</div>{" "}
              <span className="Ratinginformation">
                3,352 Ratings & 156 Reviews{" "}
                <img src="\assest\fasured.png" style={{ width: "10%" }} />{" "}
              </span>
              <span className="Extraoffer">Extra ₹3000 off</span>
              <ul>+ ₹29 Secured Packaging Fee</ul>
              <div className="availableroffer">Price Details</div>
              <div>
                <span className="imagrhandler">
                  <h6>
                    Coupons for you{" "}
                    <span
                      className="Extraoffer"
                      style={{
                        fontSize: "1rem",
                        display: "inline",
                        marginLeft: "8rem",
                      }}
                    >
                      -₹100
                    </span>
                  </h6>
                </span>{" "}
                <div>
                  {" "}
                  <span className="imagrhandler">
                    <h6>
                      Delivery Charges{" "}
                      <span
                        className="Extraoffer"
                        style={{
                          fontSize: "1rem",
                          display: "inline",
                          marginLeft: "8rem",
                        }}
                      >
                        Free
                      </span>
                    </h6>
                  </span>{" "}
                </div>
                <div>
                  {" "}
                  <span className="imagrhandler">
                    <h6>
                      Discount{" "}
                      <span
                        className="Extraoffer"
                        style={{
                          fontSize: "1rem",
                          display: "inline",
                          marginLeft: "8rem",
                        }}
                      >
                        Extra 15% off
                      </span>
                    </h6>
                  </span>{" "}
                </div>
                <div>
                  {" "}
                  <span className="imagrhandler">
                    <h6 className="Extraoffer">
                      You will save 90%on this order
                    </h6>
                  </span>{" "}
                </div>
              </div>
              <p className=""></p>
              <div className="supercoin">
                <img src="\assest\supercoin2.webp" />{" "}
              </div>
            </div>
            <div>
              <li className="col col-6 col-12">
                <button className="btnbuy " onClick={() => Buynow()}>
                  Continue
                </button>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
