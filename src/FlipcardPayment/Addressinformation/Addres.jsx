import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        navigate("/Payment");
    }

    return (
        <>
            <div className="container">
                <h2
                    className="mx-auto text-center border-dark border-3"
                    style={{ width: "280px" }}
                >
                    Address
                </h2>

                <div className="container text-white">




                    <form action=" " onSubmit={handlesubmitdata}>
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
                                    name="DOB"
                                    className="form-control"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Enter your Pin Code"
                                    className="form-control"
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
                                    id="phone"
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
                                    id="phone"
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
