import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import postData from "../../hooks/usePost";
import { useLoading, Spinner } from "../../hooks/useLoading";
import { ArrowLeftCircleIcon } from "lucide-react";

const EmailRegister = () => {
  const navigate = useNavigate();
  const onBack = () => navigate(-1);
  
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email });
  const formRef = useRef();

  const validateEmail = (v) =>
    !v
      ? "Please Enter your email"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && "Invalid email";

  // Handle input changes
  const onEmailChange = (e) => {
    const v = e.target.value;
    setErrors((prev) => ({ ...prev, email: validateEmail(v) || "" }));
    setEmail(v);
  };
  // const changeEventHandler = (e) => {
  //   setEmail({ ...email, [e.target.name]: e.target.value });
  // };

  const { hookHandleSubmit, showError, showSuccess } = postData();
  const { loading, wrap } = useLoading();

  const handleSendLink = (e) => {
    e.preventDefault();
    const newErrs = {
      email: validateEmail(email),
    };
    Object.keys(newErrs).forEach((k) => {
      if (!newErrs[k]) delete newErrs[k];
    });
    if (Object.keys(newErrs).length) {
      setErrors(newErrs);
      formRef.current.classList.remove("animationsubmit");
      void formRef.current.offsetWidth;
      formRef.current.classList.add("animationsubmit");
      // alert("Invalid!");
    } else {
      const updatedEmail = { email };
      console.log("updated email sent to API:", updatedEmail);

      wrap(async () => {
        // simulate async call
        await new Promise((r) => setTimeout(r, 2000));
        // actual submit logic here
      });
      toast.info("Verification link sent to your email!");

      hookHandleSubmit(
        updatedEmail,
        `${import.meta.env.VITE_BACKEND_URL}/auth/register/emailverification`,
        "/register"
      );
    }
  };

  useEffect(() => {
    if (showSuccess) {
      console.log(showSuccess);
      toast.success(showSuccess);
    } else if (showError) {
      toast.error(showError);
      console.log(showError);
    }
  }, [showSuccess, showError]);

  return (
    <>
      <div className="custom-bg max-w-screen max-h-screen w-full h-full flex justify-center items-center relative">
        {/* Purple blur circle */}
        {/* <div className="purple-circle z-10 opacity-70"></div> */}

        {/* Glassmorphic form container */}
        <div className="absolute inset-0 z-50 flex justify-center items-center">
          <div
            ref={formRef}
            className="glass-card-short max-w-screen-lg p-8 max-h-screen flex justify-center items-center bg-transparent text-[#FFFF] rounded-3xl border-[2px] border-[#d5d0f1]"
          >
            <div className="w-full ">
              <div className="w-full">
                <p className="w-full flex justify-between items-center font-bold text-[26px] tracking-[0.5px]">
                  Enter Your Email
                  <span className="cursor-pointer" onClick={onBack}>
                    <ArrowLeftCircleIcon />
                  </span>
                </p>
                <p className="text-sm font-normal">
                  We verify your email to protect your account, confirm your
                  identity, and keep you informed securely.
                </p>
              </div>
              <div className="w-full mt-4">
                <form onSubmit={handleSendLink} className="flex flex-col gap-2">
                  <div className="w-full h-[88px]">
                    <label
                      htmlFor="name"
                      className="w-full text-[14px] font-medium tracking-[0.2px]"
                    >
                      Email Address
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={onEmailChange}
                        placeholder="Enter your email address"
                        
                        className={`inputBox ${
                          errors.email ? "invalidInputBox" : "validInputBox"
                        }`}
                      />
                    </div>
                      {errors.email ? (
                  <p className="inputBoxError">{errors.email}</p>
                ) : (
                      <p className="inputBoxError">{showError}<span className="text-white">{showSuccess}</span></p>)}
                  </div>

                  <div className="">
                    <div className="">
                      <button
                        type="submit"
                        className="text-[#FFFF] text-md font-semibold h-[46px] w-full px-auto py-2 rounded-xl bg-blue-800 border border-transparent"
                      >
                        {loading && <Spinner />}
                        {loading ? "" : "Next"}
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

export default EmailRegister;
