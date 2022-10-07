import React from 'react'
import "./footer.css"
import {
    Link
} from "react-router-dom";
export default function Footer() {
    return (
        <>


            <footer className="bgcolor">
                <div className="container mb-0">
                    <div className="row py-3">

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 textcolor ">About</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><Link to="/" >Contact Us</Link></li>
                                <li className="mb-2"><Link to="/" >About Us</Link></li>
                                <li className="mb-2"><Link to="/" >Stories</Link></li>
                                <li className="mb-2"><Link to="/" >Press</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 textcolor ">Help</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><Link to="/" >Payments</Link></li>
                                <li className="mb-2"><Link to="/" >Shipping</Link></li>
                                <li className="mb-2"><Link to="/" >Cancellation</Link></li>
                                <li className="mb-2"><Link to="/" >Returns</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 textcolor ">Policy</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><Link to="/" >Return Policy</Link></li>
                                <li className="mb-2"><Link to="/" >Terms Of Use</Link></li>
                                <li className="mb-2"><Link to="/" >Security</Link></li>
                                <li className="mb-2"><Link to="/" >Privacy</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 textcolor ">Company</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><Link to="/" >Login</Link></li>
                                <li className="mb-2"><Link to="/" >Register</Link></li>
                                <li className="mb-2"><Link to="/" >Sitemap</Link></li>
                                <li className="mb-2"><Link to="/" >Our Products</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 textcolor ">Registered Office Address</h6>
                            <p className=" textcolor mb-4">Flipkart Internet Private Limited,

                                Buildings Alyssa, Begonia &

                                Clove Embassy Tech Village,

                                Outer Ring Road, Devarabeesanahalli Village,

                                Bengaluru, 560103,

                                Karnataka, India

                                CIN : U51109KA2012PTC066107</p>
                            <ul className="list-inline mt-4">
                                <li className="list-inline-item"><Link to="/" target="_blank" title="twitter"><i className="fab  fa-2x fa-twitter"></i></Link></li>
                                <li className="list-inline-item"><Link to="/" target="_blank" title="facebook"><i className="fab fa-2x fa-facebook-f"></i></Link></li>
                                <li className="list-inline-item"><Link to="/" target="_blank" title="instagram"><i className="fab fa-2x fa-instagram"></i></Link></li>
                                <li className="list-inline-item"><Link to="/" target="_blank" title="pinterest"><i className="fab fa-2x fa-youtube"></i></Link></li>
                                <li className="list-inline-item"><Link to="/" target="_blank" title="vimeo"><i className="fab fa-2x fa-google"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
