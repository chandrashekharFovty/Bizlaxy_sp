import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import facebook from "../../../public/facebook.png";
import googleIcon from "../../../public/Google.png";
import iosApple from "../../../public/iosApple.png";
import { useDispatch, useSelector } from "react-redux";
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { setLoading, setUser } from "@/redux/authSlice";
import axios from "axios";
import EyeClose from "../../../public/eyepassword.png";
import postData from "../../hooks/usePost";
import { useLoading, Spinner } from "../../hooks/useLoading";

const LogIn = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    mobile: sessionStorage.getItem("mobile"),
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({username,password});
  const formRef = useRef();

  const validateUsername = (v) =>
    !v ? `Please Enter your username` : v.length < 3 && "Your username too short";
  const validatePassword = (v) =>
    !v ? "Please Enter your password" : v.length < 8 && "Your password legnth should above 8";

  
  const onUsernameChange = (e) => {
    const v = e.target.value;
    setUsername(v);
    setErrors((prev) => ({ ...prev, username: validateUsername(v) || "" }));
  };
  const onPasswordChange = (e) => {
    const v = e.target.value;
    setPassword(v);
    setErrors((prev) => ({ ...prev, password: validatePassword(v) || "" }));
  };

 
  const { hookHandleSubmit, showError, showSuccess } = postData();
  const { loading, wrap } = useLoading();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newErrs = {
      username: validateUsername(username),
      password: validatePassword(password),
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
      }
      else {
    
        setInput({ ...input, username: username, password: password });
        //localStorage.setItem("signupData", JSON.stringify(input));
        //alert("Submitted!");
        const updatedData = { ...input, username: username, password: password };
        console.log(updatedData);
        
        wrap(async () => {
        await new Promise((r) => setTimeout(r, 1000));
        hookHandleSubmit(
          updatedData,
          `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
          "/feed"
        );
        });
    };
  };

   useEffect(() => {
    if (showSuccess) {
      console.log(showSuccess);
     // toast.success(showSuccess);
    } else if (showError) {
      //.error(showError);
      console.log(showError);
    }
  }, [showSuccess, showError]);

  return (
    <>
      <div className="custom-bg max-w-screen max-h-screen relative w-full h-full flex justify-center items-center">
        <div className="absolute inset-0 z-20 flex justify-center items-center">
          <div
            ref={formRef}
            className="glass-card-login text-white flex flex-col items-center justify-between p-8"
          >
            {/* Heading */}
            <div className="w-full h-16 flex flex-col justify-start items-start text-left">
              <p className="font-bold text-[26px] tracking-[0.2px]">Sign In</p>
              <p className="text-[14px] font-normal tracking-[0.2px] mt-1">
                Access Your Galaxy – Sign In to Continue!
              </p>
            </div>
            {/* Form */}
            <form
              onSubmit={submitHandler}
              className="w-full mt-4 flex flex-col gap-2"
            >
              {/* Username Field */}
              <div className="h-[80px]">
                <label
                  htmlFor="username"
                  className="text-[14px] tracking-[0.2px] font-medium"
                >
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  name="username"
                  onChange={onUsernameChange}
                  className={`inputBox ${
                    errors.username ? "invalidInputBox" : "validInputBox"
                  }`}
                />
                {errors.username ? (
                  <p className="inputBoxError">{errors.username}</p>) : <p className="inputBoxError">{showError}<span className="text-white">{showSuccess}</span></p>} 
                  </div>
              {/* Password Field */}
              <div className="h-[80px]">
                <label
                  htmlFor="password"
                  className="text-[14px] tracking-[0.2px] font-medium"
                >
                  Password
                </label>
                <PasswordToggleField.Root>
                  <div className="flex items-center w-full">
                    <PasswordToggleField.Input
                      // type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={password}
                      onChange={onPasswordChange}
                      className={`inputBox ${
                        errors.password ? "invalidInputBox" : "validInputBox"
                      }`}
                    />
                    <PasswordToggleField.Toggle className="all-[unset] box-border h-5 text-inherit leading-[1] flex items-center justify-center aspect-square ml-[-2.5rem]">
                      <PasswordToggleField.Icon
                        visible={
                          <img
                            src={EyeClose}
                            alt="hide"
                            className="w-5 h-5 cursor-pointer opacity-70"
                          />
                        }
                        hidden={
                          <EyeClosedIcon className="w-5 h-5 cursor-pointer opacity-70" />
                        }
                      />
                    </PasswordToggleField.Toggle>
                  </div>
                  {errors.password ? 
                  (<p className="inputBoxError">{errors.username}</p>) : (<p className="inputBoxError">{showError}{showSuccess}</p>)
                  }
                </PasswordToggleField.Root>
              </div>

              {/* Forgot Password */}
              <div className="text-end">
                <p className="text-sm text-white font-normal tracking-[0.2px]">
                  <Link to="/forgotpassword">Forgot Password? </Link>
                </p>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="text-white transition-all duration-300 ease-in-out hover:bg-blue-800 hover:scale-105 active:scale-95 text-md font-semibold h-[46px] w-full rounded-xl bg-blue-800"
              >
                {loading && <Spinner />}
                {loading ? "" : "Sign In"}
              </button>
            </form>
            {/* Social Auth */}
            {/* <div className="w-full mt-6">
              <div className="flex items-center justify-between text-center mb-4">
                <div className="h-0.5 w-40 bg-gradient-to-r to-[#bbd2f7] from-transparent"></div>
                <p className="text-sm text-[#FFFFFFB2] font-normal">
                  Or Sign In with
                </p>
                <div className="h-0.5 w-40 bg-gradient-to-r from-[#bbd2f7] to-transparent"></div>
              </div>
              <div className="flex gap-5 justify-center">
                <button className="w-[165px] h-[46px] text-[#3C5A99] shadow-md shadow-gray-800 flex justify-center items-center rounded-xl bg-white border border-[#BED6FF]">
                  <img src={facebook} alt="Facebook" className="w-5 h-5" />
                </button>
                <button className="w-[165px] h-[46px] text-black shadow-md shadow-gray-800 flex justify-center items-center rounded-xl bg-white border border-[#BED6FF]">
                  <img src={googleIcon} alt="Google" className="w-5 h-5" />
                </button>
                <button className="w-[165px] h-[46px] text-black shadow-md shadow-gray-800 flex justify-center items-center rounded-xl bg-white border border-[#BED6FF]">
                  <img src={iosApple} alt="IOS" className="w-5 h-5" />
                </button>
              </div>
            </div> */}
            {/* Sign Up link */}
            <div className="w-full mt-2 flex justify-center gap-1 font-normal text-[14px]">
              <p>Don’t have an account?</p>
              <span className="underline  font-medium">
                <Link to="/mobileregister">Sign Up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
