import React from "react";
import { useNavigate } from "react-router-dom";
import "./cardstyl.css";
export default function Cardinformation() {
  const navigate = useNavigate();
  function handlesubmitdata(e) {
    e.preventDefault();
    alert("hello");
    navigate("/OTP");
  }
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="headerimge">
            <img src="\assest\flipcardbankoffer1.png" alt="" />
          </div>
          <div className="discount">
            <div>
              <span className="imagrhandler">
                <img src="\assest\bankoffer.webp" />
              </span>
              Bank Offer5% Cashback on Flipkart Axis Bank Card T&C
            </div>
          </div>

          <div className="discount">
            <div>
              Please ensure your card can be used for online transactiond
              <span className="color">Know more</span>
            </div>
          </div>
        </div>
      </div>
      {/* seconded card */}

      <div className="padding">
        <div className="row">
          <div className="container-fluid d-flex justify-content-center">
            <div className="col-sm-8 col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-6">
                      <span>CREDIT/DEBIT CARD PAYMENT</span>
                    </div>

                    <div
                      className="col-md-6 text-right"
                      style={{ marginTop: "-5px" }}
                    >
                      <img src="https://img.icons8.com/color/36/000000/visa.png" />
                      <img src="https://img.icons8.com/color/36/000000/mastercard.png" />
                      <img src="https://img.icons8.com/color/36/000000/amex.png" />
                    </div>
                  </div>
                </div>
                <form
                  action=" "
                  className="card-body"
                  onSubmit={handlesubmitdata}
                  style={{ height: "350px" }}
                >
                  <div className="form-group">
                    <label for="cc-number" className="control-label">
                      CARD NUMBER
                    </label>
                    <input
                      id="cc-number"
                      type="tel"
                      className="input-lg form-control cc-number"
                      autocomplete="cc-number"
                      placeholder=" Card Number"
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="cc-exp" className="control-label">
                          CARD EXPIRY
                        </label>
                        <input
                          id="cc-exp"
                          type="tel"
                          className="input-lg form-control cc-exp"
                          autocomplete="cc-exp"
                          placeholder="Card Expiry"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="cc-cvc" className="control-label">
                          CARD CVC
                        </label>
                        <input
                          id="cc-cvc"
                          type="tel"
                          className="input-lg form-control cc-cvc"
                          autocomplete="off"
                          placeholder=" CARD CVC"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="numeric" className="control-label">
                      CARD HOLDER NAME
                    </label>
                    <input type="text" className="input-lg form-control" />
                  </div>

                  <div className="form-group">
                    <button
                      className="Makepayment"
                      value="MAKE PAYMENT"
                      type="button"
                      className="Makepayment"
                      style={{ fontSize: "0.8rem" }}
                      onClick={() => handlesubmitdata()}
                    >
                      MAKE PAYMENT{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
    </>
  );
}
// <option selected> select Your Card Type</option>
//                 <option value="1">Credit Card</option>
//                 <option value="2">Debit Card</option>
