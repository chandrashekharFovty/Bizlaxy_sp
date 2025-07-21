import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import postData from "../../hooks/usePost";
import { log } from "node:console";
import { useLoading, Spinner } from "../../hooks/useLoading";

const Register = function () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({
    username,
    password,
    fullname,
    termsAccepted: "",
  });
  const [strength, setStrength] = useState(0);
  const [strengthLabel, setStrengthLabel] = useState(
    "Please Choose a strong password"
  );
  const formRef = useRef();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // Per-field validation functions
  const validateUsername = (v) =>
    !v ? "Please Enter your username" : v.length < 3 && "Username too short";
  const validatePassword = (v) =>
    !v
      ? "Please Enter your password"
      : strength < 10 &&
        "Password must be strong and have a mix of uppercase and lowercase letters, numbers, and symbols.       .";
  const validateFullname = (v) => {
    if (!v) return "Please Enter your full name";
    if (!/^[a-zA-Z\s]+$/.test(v)) return "Only letters and spaces allowed";
    if (v.trim().length < 3) return "Name is too short";
    return "";
  };
  const validateTermsAccepted = (isChecked) => {
    return isChecked ? "" : "You must accept the terms and conditions";
  };
  // Password strength calculation
  const calcStrength = (v) => {
    let score = 0;
    if (v.length >= 8) score += 1;
    if (v.length >= 10) score += 1;
    if (/[0-9]/.test(v)) score += 1;
    if (/[a-z]/.test(v)) score += 1;
    if (/[A-Z]/.test(v)) score += 1;
    if (/[^A-Za-z0-9]/.test(v)) score += 1;

    const percentage = (score / 6) * 100;
    setStrength(percentage);

    const label =
      percentage === 0
        ? "please Choose a strong password"
        : percentage <= 33
        ? "Weak"
        : percentage <= 66
        ? "Medium"
        : percentage >= 75
        ? "very Strong"
        : "strong";

    percentage > 90 ? setStrengthLabel("") : setStrengthLabel(label);
  };
  // Handle input changes
  const onUsernameChange = (e) => {
    const v = e.target.value;
    setUsername(v);
    setErrors((prev) => ({ ...prev, username: validateUsername(v) || "" }));
  };
  const onPasswordChange = (e) => {
    const v = e.target.value;
    setPassword(v);
    calcStrength(v);
    setErrors((prev) => ({ ...prev, password: validatePassword(v) || "" }));
  };
  const onFullnameChange = (e) => {
    const v = e.target.value;
    setFullname(v);
    setErrors((prev) => ({ ...prev, fullname: validateFullname(v) || "" }));
  };
  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setTermsAccepted(checked);
    setErrors((prev) => ({
      ...prev,
      termsAccepted: validateTermsAccepted(checked),
    }));
  };

  const { hookHandleSubmit, showError, showSuccess } = postData();
  const { loading, wrap } = useLoading();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newErrs = {
      username: validateUsername(username),
      password: validatePassword(password),
      fullname: validateFullname(fullname),
      termsAccepted: validateTermsAccepted(termsAccepted),
    };
    Object.keys(newErrs).forEach((k) => {
      if (!newErrs[k]) delete newErrs[k];
    });
    if (Object.keys(newErrs).length) {
      setErrors(newErrs);
      formRef.current.classList.remove("animationsubmit");
      void formRef.current.offsetWidth;
      formRef.current.classList.add("animationsubmit");
    } else {
      const updatedData = { username, password, fullname };
      console.log(updatedData);
      wrap(async () => {
        // simulate async call
        await new Promise((r) => setTimeout(r, 1000));
        // actual submit logic here
      });
      hookHandleSubmit(
        updatedData,
        `${import.meta.env.VITE_BACKEND_URL}/auth/register/signup`,
        "/selectaccounttype"
      );
    }

    // Save user data to localStorage
    // localStorage.setItem("user", JSON.stringify(input));
    // toast.success("Registration successful! Please login.");
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
      <div className="custom-bg w-full h-full flex justify-center items-center relative">
        {/* Purple blur circle */}
        {/* <div className="purple-circle z-10 opacity-70"></div> */}
        {/* Glassmorphic form container */}
        <div className="absolute inset-0 z-50 flex justify-center items-center">
          <div
            ref={formRef}
            className={`glass-card-signup  ${
              errors.password ? "w-[444px] h-[608px]" : "w-[444px] h-[548px]"
            }`}
          >
            <div className="w-full h-full">
              <div className="w-full">
                <p className="font-bold text-[26px]  tracking-[0.2px]">
                  Create Your Account
                </p>
                <p className="text-sm font-normal tracking-[0.2px] mt-1">
                  Join Now & Unlock Your Digital
                  <span className="font-medium">Galaxy!</span>
                </p>
              </div>
              <div className="w-full">
                <form
                  onSubmit={submitHandler}
                  className="mt-4 flex flex-col gap-2"
                >
                  <div className="w-full h-[80px]">
                    <label
                      htmlFor="fullname"
                      className="w-full text-[14px] font-normal tracking-[0.2px]"
                    >
                      Full Name
                    </label>
                    <div className="">
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Enter your full name"
                        value={fullname}
                        onChange={onFullnameChange}
                        className={`inputBox ${
                          errors.fullname ? "invalidInputBox" : "validInputBox"
                        }`}
                      />
                    </div>
                    {errors.fullname && (
                      <p className="inputBoxError">{errors.fullname}</p> 
                    )}
                  </div>
                  <div className="w-full h-[80px]">
                    <label
                      htmlFor="username"
                      className="w-full text-[14px] font-normal tracking-[0.2px]"
                    >
                      Username
                    </label>
                    <div className="">
                      <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={onUsernameChange}
                        className={`inputBox ${
                          errors.username ? "invalidInputBox" : "validInputBox"
                        }`}
                      />
                    </div>
                    {errors.username && (
                      <p className="inputBoxError">{errors.username}</p>
                    ) }
                  </div>
                  <div className="w-full h-[80px]">
                    <label
                      htmlFor="password"
                      className="w-full text-[14px] font-normal tracking-[0.2px]"
                    >
                      Create a password
                    </label>
                    <PasswordToggleField.Root>
                      <div className="flex items-center w-[104%]">
                        <PasswordToggleField.Input
                          placeholder="Enter your password"
                          name="password"
                          value={password}
                          onChange={onPasswordChange}
                          className={`inputBox ${
                            errors.password
                              ? "invalidInputBox"
                              : "validInputBox"
                          }`}
                        />
                        <PasswordToggleField.Toggle className="all-[unset] box-border h-[18px] text-[15px] text-inherit leading-[1] flex items-center justify-center aspect-[1/1] rounded-[0.5px] focus-visible:outline-[2px] focus-visible:outline-accent-9 focus-visible:outline-offset-[2px]">
                          <PasswordToggleField.Icon
                            className="-ml-16 relative"
                            visible={
                              <img
                                src="/eyepassword.png"
                                alt="hide"
                                className="w-5 h-5 cursor-pointer opacity-70"
                              />
                              // <EyeOpenIcon className="w-5 h-5 cursor-pointer" />
                            }
                            hidden={
                              <EyeClosedIcon className="w-5 h-5 cursor-pointer" />
                            }
                          />
                        </PasswordToggleField.Toggle>
                      </div>
                      {errors.password ? (
                        <p className="inputBoxError">{errors.password}</p>
                      ) : (
                      <p className="inputBoxError">{showError}<span className="text-white">{showSuccess}</span></p>)}
                      {password && (
                        <>
                          <div
                            className={
                              strength > 90
                                ? "hidden"
                                : "w-full bg-trasparent h-2 border rounded mt-1"
                            }
                          >
                            <div
                              className={`h-full rounded transition-all duration-300 ${
                                strength <= 33
                                  ? "bg-red-500"
                                  : strength <= 66
                                  ? "bg-yellow-500"
                                  : "bg-green-500"
                              }`}
                              style={{ width: `${strength}%` }}
                            />
                          </div>
                          <p className="inputBoxError">{strengthLabel}</p>
                        </>
                      )}
                    </PasswordToggleField.Root>
                  </div>
                  <div className={errors.password ? "mt-16" : "mt-4"}>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={handleCheckboxChange}
                        name="terms"
                        id="terms"
                        className="custom-checkbox"
                      />
                      {/* <CheckboxDemo /> */}
                      <label
                        htmlFor="terms"
                        className="pl-[8px] text-[12px] leading-none text-white"
                      >
                        I agree to the
                        <span className="text-blue-900">
                          <a href="/terms"> Terms & Conditions.</a>
                        </span>
                      </label>
                    </div>
                    {errors.termsAccepted && (
                      <p className="inputBoxError">{errors.termsAccepted}</p>
                    )}
                  </div>
                  <div className="mt-1">
                    <div className="h-[50px]">
                      <button
                        type="submit"
                        className="text-[#FFFF] text-md font-medium h-[46px] w-full px-auto py-2 rounded-xl bg-blue-800 border border-transparent"
                      >
                        {loading && <Spinner />}
                        {loading ? "" : "Sign Up"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="w-full flex justify-center items-center gap-1">
                <p className="text-center text-[14px]">
                  Already have an account?
                </p>

                <span className="underline">
                  <Link to="/">Sign in</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
