import { useCallback, useEffect, useState } from "react";
export default function OTP() {
    const [timer, setTimer] = useState(60);
    const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);

    useEffect(() => {
        timer > 0 && setTimeout(timeOutCallback, 1000);
    }, [timer, timeOutCallback]);

    const resetTimer = function () {
        if (!timer) {
            setTimer(60);
        }
    };


    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="headerimge">
                        <img src="\assest\supercoin2.webp" alt="" style={{ background: "blue" }} />
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
                    <span className="mobile-text"
                    ><b>Enter the code we just sent on your phone</b>
                        <b className="text-color">+91 ******282</b>
                    </span>
                    <form>
                        <div className="d-flex flex-row mt-5">
                            <input type="text" className="form-control border-0 border-bottom border border-primary" autofocus="" required />
                        </div>
                        <div className="text-center mt-5">

                            <span className="d-block mobile-text" id="countdown"> Not received your code? Resend code in {timer} Seconds</span>
                            <span className="d-block mobile-text" id="resend" onClick={() => resetTimer()}>Resend Otp</span>
                            <button type="button" class="btn btn-primary">verifly</button>
                        </div>
                    </form>
                </div>
            </div>




            <div className="container">
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
    )
}

