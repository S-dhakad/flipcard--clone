import React from 'react'
import "./footer.css"
export default function Footer() {
    return (
        <>


            <footer className="bgcolor">
                <div className="container mb-0">
                    <div className="row py-3">

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 textcolor ">About</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a href="/" >Contact Us</a></li>
                                <li className="mb-2"><a href="/" >About Us</a></li>
                                <li className="mb-2"><a href="/" >Stories</a></li>
                                <li className="mb-2"><a href="/" >Press</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 textcolor ">Help</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a href="/" >Payments</a></li>
                                <li className="mb-2"><a href="/" >Shipping</a></li>
                                <li className="mb-2"><a href="/" >Cancellation</a></li>
                                <li className="mb-2"><a href="/" >Returns</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 textcolor ">Policy</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a href="/" >Return Policy</a></li>
                                <li className="mb-2"><a href="/" >Terms Of Use</a></li>
                                <li className="mb-2"><a href="/" >Security</a></li>
                                <li className="mb-2"><a href="/" >Privacy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 textcolor ">Company</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a href="/" >Login</a></li>
                                <li className="mb-2"><a href="/" >Register</a></li>
                                <li className="mb-2"><a href="/" >Sitemap</a></li>
                                <li className="mb-2"><a href="/" >Our Products</a></li>
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
                                <li className="list-inline-item"><a href="/" target="_blank" title="twitter"><i className="fab  fa-2x fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="/" target="_blank" title="facebook"><i className="fab fa-2x fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="/" target="_blank" title="instagram"><i className="fab fa-2x fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="/" target="_blank" title="pinterest"><i className="fab fa-2x fa-youtube"></i></a></li>
                                <li className="list-inline-item"><a href="/" target="_blank" title="vimeo"><i className="fab fa-2x fa-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
