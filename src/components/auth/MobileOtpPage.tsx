import Index from "@/pages/Index";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import postData from "../../hooks/usePost";
import { useLoading, Spinner } from "../../hooks/useLoading";
import { ArrowLeftCircleIcon } from "lucide-react";

const OtpPage = () => {
  const navigate = useNavigate();
  const onBack = () => navigate(-1);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const [fullotps, setFullotp] = useState({
    mobile: sessionStorage.getItem('mobile'),
    otp: "",
  });
  const [error, setError] = useState("");

  const inputsRef = useRef([]);
  const formRef = useRef();
  //const [errors, setErrors] = useState({ otp });

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  //const storedMobile = sessionStorage.getItem("mobile");
  const { hookHandleSubmit, showError, showSuccess } = postData();
  const { loading, wrap } = useLoading();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    if (fullOtp.length < 6 || otp.includes("")) {
      setError("Please enter a valid 6-digit OTP");
      formRef.current.classList.remove("animationsubmit");
      void formRef.current.offsetWidth;
      formRef.current.classList.add("animationsubmit");
      ///setShake(true);
      return;
    }
    
    setError(""); 
    const numericOtp = parseInt(fullOtp);   
    const updatedOtp = { ...fullotps, otp: numericOtp };
    console.log("Otp:", updatedOtp);
    wrap(async () => {
      // simulate async call
      await new Promise((r) => setTimeout(r, 1000));
      // actual submit logic here
    });
      hookHandleSubmit(
        updatedOtp,
        `${import.meta.env.VITE_BACKEND_URL}/auth/register/verifyotp`,
        "/emailregister"
      );
  };

  //useEffect(() => {
  //   if (showSuccess) {
      //console.log(showSuccess);
  //     toast.success(showSuccess);
  //   } else if (showError) {
  //     toast.error(showError);
      // console.log(showError);
  //   }
  // }, [showSuccess, showError]);

  //hasshed phone number show in the otp page
  function maskPhonenumber (){
    const mobile = fullotps.mobile;
    if (mobile && mobile.length >= 10) {
      return `${mobile.slice(0, 3)}****${mobile.slice(-3)}`;
    }
    return mobile;
  }
  return (
    <>
      <div className="custom-bg max-w-screen max-h-screen w-full h-full flex justify-center items-center relative">
        <div className="absolute inset-0 z-50 flex justify-center items-center">
          <div
            ref={formRef}
            className="glass-card-short max-w-screen-lg p-8 max-h-screen flex justify-center items-center bg-transparent text-[#FFFF] rounded-3xl border-[2px] border-[#d5d0f1]"
          >
            <div className="w-full">
              <div className="w-full">
                <p className="w-full font-bold text-3xl flex justify-between items-center tracking-[0.2px]">
                  Enter OTP
                  <span className="cursor-pointer" onClick={onBack}>
                    <ArrowLeftCircleIcon />
                  </span>
                </p>
                <p className="text-base font-normal">
                  6 digit Otp sent to your mobile
                  <br />
                  <span className="font-medium">{maskPhonenumber()}</span>
                </p>
              </div>
              <div className="w-full mt-5">
                <form
                  onSubmit={handleSubmit}
                  className="mt-2 flex flex-col gap-2"
                >
                  <div className="w-full h-[60px] flex gap-3">
                    {otp.map((digit, idx) => (
                      <input
                        placeholder="_"
                        key={idx}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        ref={(el) => (inputsRef.current[idx] = el)}
                        className={`validInputBoxOtp ${
                          error ? "invalidInputBox" : "validInputBox"
                        }`}
                      />
                    ))}
                  </div>
                  {error ? (<p className="inputBoxError">{error}</p>) : (
                      <p className="inputBoxError">{showError}<span className="text-white">{showSuccess}</span></p>)}
                  <div className="">
                    <div className="">
                      <button
                        type="submit"
                        //onClick={handleSubmit}
                        className="text-[#FFFF] text-md font-semibold h-[56px] w-full my-auto px-auto py-2 rounded-xl bg-blue-800 border border-transparent"
                      >
                        {loading && <Spinner />}
                        {loading ? "" : "Continue"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpPage;
