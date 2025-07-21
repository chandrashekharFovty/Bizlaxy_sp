import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import postData from "../../hooks/usePost";
import { useLoading, Spinner } from "../../hooks/useLoading";
import { ArrowLeftCircleIcon } from "lucide-react";

const EmailOtpPage = () => {
  const navigate = useNavigate();
  const onBack = () => navigate(-1);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [fullotps, setFullotp] = useState({
    mobile: sessionStorage.getItem("mobile"),
    otp: "",
  });
  const [error, setError] = useState("");

  const inputsRef = useRef([]);
  const formRef = useRef();

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

  const { hookHandleSubmit, showError, showSuccess } = postData();
  const { loading, wrap } = useLoading();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    if (fullOtp.length < 6) {
      setError("Please enter a valid 6-digit OTP");
      formRef.current.classList.remove("animationsubmit");
      void formRef.current.offsetWidth;
      formRef.current.classList.add("animationsubmit");
      return;
      //create password page navigate
    } else {
      setError("");
      const updatedOtp = { ...fullotps, otp: fullOtp };
      console.log(updatedOtp);
      wrap(async () => {
        // simulate async call
        await new Promise((r) => setTimeout(r, 1000));
        // actual submit logic here
        hookHandleSubmit(
          updatedOtp,
          `${import.meta.env.VITE_BACKEND_URL}/auth/register/verifilyotp`,
          "/emailregister"
        );
      });
    }
  };

  // useEffect(() => {
  //   if (showSuccess) {
  //     // console.log(showSuccess);
  //     toast.success(showSuccess);
  //   } else if (showError) {
  //     toast.error(showError);
  //     // console.log(showError);
  //   }
  // }, [showSuccess, showError]);
//hasshed Email show in the otp page
  function maskGmail (){
    const email = "0810chandrashekhar@gmail.com"; // Replace with the actual email from sessionStorage or props
    // const email = sessionStorage.getItem("email");
    if (!email) return "";
    const [localPart, domain] = email.split("@");
    const maskedLocalPart = localPart.slice(0, 2) + "********";
    return `${maskedLocalPart}@${domain}`;
  }
  return (
    <>
      <div className="custom-bg max-w-screen max-h-screen w-full h-full flex justify-center items-center relative">
        {/* Purple blur circle */}
        {/* <div className="purple-circle z-10 opacity-70"></div> */}

        {/* Glassmorphic form container */}
        <div className="absolute inset-0 z-50 flex justify-center items-center">
          <div ref={formRef} className="glass-card-short max-w-screen-lg p-8 glass-card-short  flex justify-center items-center bg-transparent text-[#FFFF] rounded-3xl border-[2px] border-[#d5d0f1]">
            <div className="w-full">
              <div className="w-full">
                <p className="w-full flex justify-between items-center font-bold text-3xl tracking-[0.2px]">
                  Enter OTP
                  <span className="cursor-pointer" onClick={onBack}>
                    <ArrowLeftCircleIcon />
                  </span>
                </p>
                <p className="text-sm font-normal mt-1 tracking-[0.2px]">
                  6 digit Otp sent to your email <br />
                  <span className="font-medium"> {maskGmail()}</span>
                </p>
              </div>
              <div className="w-full mt-5">
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                  <div className="w-full h-[50px]">
                    <div className="flex gap-5">
                      {otp.map((digit, idx) => (
                        <input
                          placeholder="_"
                          key={idx}
                          type="text"
                          required
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
                    {error ? (<p className="inputBoxError">{error}</p>): (
                      <p className="inputBoxError">{showError}<span className="text-white">{showSuccess}</span></p>)}
                  </div>
                  <div className="">
                    <div className="">
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="text-[#FFFF] text-md font-semibold h-[46px] w-full px-auto py-2 rounded-xl bg-blue-800 border border-transparent"
                      >
                        <Link to="">
                          {loading && <Spinner />}
                          {loading ? "" : "Continue"}
                        </Link>
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

export default EmailOtpPage;
