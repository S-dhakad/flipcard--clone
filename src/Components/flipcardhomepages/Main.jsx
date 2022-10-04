import React, { useState, useEffect } from "react";
import mydata from "../flipcarddata/Flipcarddata.json"
import "./Main.css"
import { useDispatch } from 'react-redux'
import { Addcard } from "../Store/Createdslice";
import { useNavigate } from "react-router-dom";
export default function Main() {
    const [handlerapi, sethandlerapi] = useState([]);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const Adduserdata = (product) => {
        dispatch(Addcard(product));
        navigate("/Userproductview");
        window.scrollTo({
            top: 0,
            left: 100,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        sethandlerapi(mydata)
    }, []);

    return (
        <>
            <div
                className="d-flex align-items-center justify-content-between"
                style={{ background: "#fff" }}
            >
                <div>
                    <figure>
                        <img src="\assest\topoffers.webp" alt="Trulli" />
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src="\assest\Electronics.webp" alt="Trulli" />
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src="\assest\fashion.webp" alt="Trulli" />
                    </figure>
                </div>

                <div>
                    <figure>
                        <img src="\assest\Home.webp" alt="Trulli" />
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src="\assest\TV.webp" alt="Trulli" />
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src="\assest\mobile.webp" alt="Trulli" />
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src="\assest\Travell.webp" alt="Trulli" />
                    </figure>
                </div>
            </div>

            <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="\assest\sliderfirstimg.webp"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="\assest\sliderthirdimg.webp"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="\assest\slidersecondedimage.webp"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div class="container-fluid">
                <div class="row">
                    {handlerapi.map((product, index) => {
                        return (

                            <div class="col-xs-6 col-md-4 col-lg-3">

                                <div className="card" key={index} >
                                    <img src={product.image} onClick={() => Adduserdata(product)} className="card-img-top imghandler rounded mx-auto d-block" alt="..." style={{ width: "100px" }} />
                                    <div className="card-body">

                                        <h6 className="card-text"  >{product.title}</h6>
                                        <h5 className="card-title">₹ {product.price}       <span> <img src="\assest\fasured.png" style={{ width: "40%" }} /> </span>    </h5>
                                        <p className="card-text"  >{product.description
                                        }</p>
                                        {/* <button type="button" className="btn btn-primary" onClick={() => dispatch(Addcard(product))} >Add to Card</button> */}
                                    </div>
                                </div>
                            </div>

                        );
                    })}










                </div>
            </div>
        </>
    );
}
