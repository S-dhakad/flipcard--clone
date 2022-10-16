import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addres.css"
export default function Addres() {
    const navigate = useNavigate();
    const [User, setuser] = useState({
        Name: "",
        email: "",
        Contact: "",
        DOB: "",
        Address: "",
        ConfirmAddress: "",
    });

    //  input accepted writing logic
    const handleChange = (e) => {
        const { value, name } = e.target;
        setuser({ ...User, [name]: value });
    };

    // Added information form
    function handlesubmitdata(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 100,
            behavior: 'smooth'
        });
        navigate("/Ordersummer");
    }

    return (
        <>
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
                <h2
                    className="mx-auto text-center border-dark border-3"
                    style={{ width: "280px" }}
                >
                    Address
                </h2>

                <div className="container text-white">
                    <form onSubmit={handlesubmitdata}>
                        <div className="row my-3 justify-content-center">
                            <div className="col-xs-6 col-md-4 col-lg-3 mt-3">
                                <input
                                    type="name"
                                    placeholder="Enter your name"
                                    onChange={(e) => handleChange(e)}
                                    name="Name"
                                    required
                                    className="form-control"
                                    aria-label="Last name"
                                />
                            </div>

                            <div className="col-xs-6 col-md-4 col-lg-3 mt-3">
                                <input
                                    type="email"
                                    id="customar-email"
                                    name="email"
                                    className="form-control"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Enter your Email"
                                    aria-label="First name"
                                />
                            </div>
                        </div>

                        {/* number and dob */}

                        <div className="row my-3 justify-content-center">
                            <div className="col-xs-6 col-md-4 col-lg-3">
                                <input
                                    type="tel"
                                    pattern="[6-9]{1}[0-9]{9}"
                                    title="Phone number with 6-9 and remaing 9 digit with 0-9"
                                    onChange={(e) => handleChange(e)}
                                    name="Contact"
                                    placeholder="Enter your Number"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="col-xs-6 col-md-4 col-lg-3">
                                <input
                                    type="text"
                                    id="phone"
                                    name="pincode"
                                    className="form-control"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Enter your Pin Code"
                                    required
                                />
                            </div>
                        </div>
                        {/* address and job-location */}
                        <div className="row my-3 justify-content-center">
                            <div className="col-xs-6 col-md-4 col-lg-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Address"
                                    onChange={(e) => handleChange(e)}
                                    name="Address"
                                    placeholder=" Flat, House no, Building Company Address"
                                    aria-label="First name"
                                    required
                                />
                            </div>
                            <div className="col-xs-6 col-md-4 col-lg-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => handleChange(e)}
                                    name="ConfirmAddress"
                                    placeholder="Area  ,Street ,Sector ,Village"
                                    aria-label="Last name"
                                    required
                                />
                            </div>
                        </div>
                        {/* Town City */}
                        <div className="row my-3 justify-content-center">
                            <div className="col-xs-6 col-md-4 col-lg-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="town"
                                    onChange={(e) => handleChange(e)}
                                    name="Address"
                                    placeholder="Town"
                                    aria-label="First name"
                                    required
                                />
                            </div>
                            <div className="col-xs-6 col-md-4 col-lg-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => handleChange(e)}
                                    name="ConfirmAddress"
                                    placeholder="City"
                                    aria-label="Last name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <button
                                type="submit"
                                value=" submit now"
                                className="btn btn-primary"
                            >
                                Payment Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
