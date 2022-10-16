/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Allpayment() {
  const navigate = useNavigate();
  const Cart = () => {
    navigate("/Payment");
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
          <li className="step0 active text-center" id="step2">
            <span>Order Summary</span>
          </li>
          <li className="step0 text-muted text-end active" id="step3">
            <span style={{ marginRight: "22px" }}>Payment</span>
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="discount">
          <div>
            <span className="imagrhandler">
              <img src="\assest\bankoffer.webp" />
            </span>
            Bank Offer5% Cashback on Flipkart Axis Bank Card T&C
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center" style={{ marginTop: "-5px" }}>
            <img src="https://img.icons8.com/color/36/000000/visa.png" />
            <img src="https://img.icons8.com/color/36/000000/mastercard.png" />
            <img src="https://img.icons8.com/color/36/000000/amex.png" />
          </div>
        </div>
        <div
          className="row"
          style={{ backgroundColor: "#e8eaf6", width: "80%", margin: "auto" }}
        >
          <div className="form-check ">
            <h6 style={{ textAlign: "center" }}> All Other Options</h6>
          </div>
          <div className="container" style={{ width: "95%" }}>
            <div className="form-check ">
              <input
                type="radio"
                className="form-check-input"
                id="radio1"
                name="optradio"
                value="option1"
              />
              UPI
              <label className="form-check-label" htmlFor="radio1">
                {" "}
                <span style={{ marginLeft: "20px", color: "red" }}>
                  Disable
                </span>
              </label>
            </div>
            <div className="form-check ">
              <input
                type="radio"
                className="form-check-input"
                id="radio2"
                name="optradio"
                value="option2"
              />
              Wallets
              <label className="form-check-label" htmlFor="radio3">
                <span style={{ marginLeft: "20px", color: "red" }}>
                  Disable
                </span>
              </label>
            </div>
            <div className="form-check ">
              <input
                type="radio"
                className="form-check-input"
                id="radio3"
                name="optradio"
                value="option3"
                checked
              />
              Credit/Debit/ATM Card
              <label className="form-check-label"></label>
            </div>
            <div className="form-check ">
              <input
                type="radio"
                className="form-check-input"
                id="radio4"
                name="optradio"
                value="option4"
              />
              Net Banking
              <label className="form-check-label">
                <span style={{ marginLeft: "20px", color: "red" }}>
                  Disable
                </span>
              </label>
            </div>
            <div className="form-check ">
              <input
                type="radio"
                className="form-check-input"
                id="radio5"
                name="optradio"
                value="option5"
              />
              EMI(Easy Installments)
              <label className="form-check-label">
                <span style={{ marginLeft: "20px", color: "red" }}>
                  Disable
                </span>
              </label>
            </div>
            <div className="form-check ">
              <input
                type="radio"
                className="form-check-input"
                id="radio6"
                name="optradio"
                value="option6"
              />
              Cash ON Delivery
              <label className="form-check-label">
                <span style={{ marginLeft: "20px", color: "red" }}>
                  Disable
                </span>
              </label>
            </div>
          </div>
          <div>
            <li className="col col-6 col-12">
              <button className="btnbuy " onClick={() => Cart()}>
                Continue
              </button>
            </li>
          </div>
        </div>
      </div>

      {/* third card  */}

      <div div className="container">
        <div className="footer">
          <div>
            <img
              src="https://static.thenounproject.com/png/1684626-200.png"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3262/3262027.png"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://image.shutterstock.com/image-vector/simple-creative-easy-return-policy-260nw-2101313926.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* third card  */}

      <div div className="container">
        <div className="footer">
          <div>
            <img
              src="https://www.howtogeek.com/wp-content/uploads/2020/11/Google-Pay-hero.png?height=200p&trim=2,2,2,2&crop=16:9"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202102/phonepe_660_050221042103.jpg?size=948:533"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://aniportalimages.s3.amazonaws.com/media/details/pauyau_PlnW2rW.jpg"
              alt=""
            />
          </div>
          <div>
            <img src="https://img.icons8.com/color/36/000000/visa.png" />
          </div>
          <div>
            <img src="https://img.icons8.com/color/36/000000/mastercard.png" />
          </div>
          <div>
            <img src="https://img.icons8.com/color/36/000000/amex.png" />
          </div>
        </div>
      </div>
    </>
  );
}
