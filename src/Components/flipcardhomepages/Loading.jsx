import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loading.css"
export default function Loading() {
    const navigate = useNavigate();
    const otp = () => {
        navigate("/OTP");
    }
    const [timer, setTimer] = useState(60);

    const timeOutCallback = useCallback(
        () => setTimer((currTimer) => currTimer - 1),
        []
    );

    useEffect(() => {
        timer > 0 && setTimeout(timeOutCallback, 1000);
    }, [timer, timeOutCallback]);


    return (

        <>
            {timer > 55 ? (

                <div style={{ marginTop: "5rem" }}>
                    <div className="container">
                        <h2 className="text-center">
                            Please wait while we are processing payment
                        </h2>
                        <div className="container text-center loadingimage">
                            <img src="\assest\Loading.gif" alt="" />
                        </div>
                    </div>
                </div>) : otp()
            }
        </>
    );
}