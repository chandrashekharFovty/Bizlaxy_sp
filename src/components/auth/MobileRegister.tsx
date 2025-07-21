// PhoneInputWithModal.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import postData from "../../hooks/usePost";
import { Value } from "@radix-ui/react-select";
import SearchIcon from "/searchWhite.png";
import { useLoading, Spinner } from "../../hooks/useLoading";
import { ArrowLeftCircleIcon } from "lucide-react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { error } from "console";
import { Country } from "country-state-city";
import * as Flags from "country-flag-icons/react/3x2";


type CountryOption = {
  isoCode: string;
  name: string;
  countryCode?: string;
  dialCode?: string;
};

const countries: CountryOption[] = Country.getAllCountries().map((c) => ({
  isoCode: c.isoCode,
  name: c.name,
  countryCode: c.isoCode,
  dialCode: c.phonecode,
}));

export default function PhoneInputWithModal() {
  const [selected, setSelected] = useState<CountryOption | null>(countries[100]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const filtered = countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const navigate = useNavigate();
  const onBack = () => navigate(-1);

  const [phoneNumber, setPhoneNumber] = useState({
    mobile: "",
  });
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ phone });
  const formRef = useRef();
  const { hookHandleSubmit, showError, showSuccess } = postData();

   const validatePhone = (v) => {
    if (!v) return "Please enter phone number";
    const dialCode = selected?.dialCode || "";

    if (dialCode === "91" || dialCode === "+91") {
      return /^\d{10}$/.test(v) ? "" : "Phone must be 10 digits for India";
    }

    if (dialCode === "1" || dialCode === "+1") {
      return /^\d{10}$/.test(v) ? "" : "Phone must be 10 digits for US/Canada";
    }

    if (dialCode === "44" || dialCode === "+44") {
      return /^\d{10,11}$/.test(v) ? "" : "Phone must be 10–11 digits for UK";
    }

    return /^\d{5,15}$/.test(v) ? "" : "Phone number must be 5–15 digits";
  };


  const onPhoneChange = (e) => {
    const v = e.target.value;
    setErrors((prev) => ({ ...prev, phone: validatePhone(v) || "" }));
    setPhone(v);
  };

  const { loading, wrap } = useLoading();

  const selectedIndex = countries.findIndex(
    (c) => c.isoCode === selected?.isoCode
  );
  //console.log(selectedIndex)
  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(phoneNumber);
    wrap(async () => {
      // simulate async call
      const newErrs = {
        phone: validatePhone(phone),
      };
      Object.keys(newErrs).forEach((k) => {
        if (!newErrs[k]) delete newErrs[k];
      });
      if (Object.keys(newErrs).length) {
        setErrors(newErrs);
        formRef.current.classList.remove("animationsubmit");
        void formRef.current.offsetWidth;
        formRef.current.classList.add("animationsubmit");
      }
      // alert("Invalid!");
      else {
        await new Promise((r) => setTimeout(r, 1000));

        setPhoneNumber({ ...phoneNumber, mobile: phone });
        const updatedPhoneNumber = { ...phoneNumber, mobile: phone };
        console.log(updatedPhoneNumber, selected.name,selected.dialCode);


        sessionStorage.setItem("mobile", updatedPhoneNumber.mobile);
        //alert("Submitted!");

        hookHandleSubmit(
          updatedPhoneNumber,
          `${import.meta.env.VITE_BACKEND_URL}/auth/register/mobile`,
          `/mobileotp`
        );
      }
    });
  };

  // useEffect(() => {
  //   if (showSuccess) {
  //     // console.log(showSuccess);
  //     toast.success(showSuccess);
  //     sessionStorage.setItem("mobile", phoneNumber.mobile);
  //   } else if (showError) {
  //     toast.error(showError);
  //     // console.log(showError);
  //   }
  // }, [showSuccess, showError]);

  return (
    <>
      <div className="custom-bg max-w-screen max-h-screen w-full h-full flex justify-center items-center relative">
        <div className="absolute inset-0 z-50 flex justify-center items-center">
          <div
            ref={formRef}
            className="glass-card-phone max-w-screen-lg p-8 max-h-screen bg-transparent text-[#FFFF] rounded-3xl border-[2px] border-[#d5d0f1]"
          >
            <div className="w-full">
              <div className="w-full ">
                <p className="w-full font-bold flex justify-between items-center text-[26px] tracking-[0.2px]">
                  Enter Your Number
                  <span className="cursor-pointer" onClick={onBack}>
                    <ArrowLeftCircleIcon />
                  </span>
                </p>
                <p className="text-sm font-normal w-full tracking-[0.2px] mt-1">
                  We collect your phone number to verify your identity, enhance
                  security, and ensure a smooth onboarding experience.
                </p>
              </div>
              <div className="w-full mt-4">
                <form
                  onSubmit={submitHandler}
                  className="w-full flex flex-col gap-4"
                >
                  <div className="w-full h-[80px]">
                    <label
                      htmlFor="name"
                      className="w-full text-[14px] font-medium tracking-[0.2px]"
                    >
                      Phone Number
                    </label>
                    <div
                      className={`flex border-2 focus:border-2 rounded-xl overflow-hidden ${
                        errors.phone ? "invalidInputBox" : "border-blue-300 "
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="flex w-3/12 h-[46px] items-center justify-center bg-trasparent text-[16px] border-r"
                      >
                        {selected && (
                          <div
                            onClick={() => setSelected(selected)}
                            className="flex items-center gap-2"
                          >
                            {" "}
                            {React.createElement(
                              (Flags as any)[selected.isoCode],
                              { title: selected.name, style: { width: "24px" } }
                            )}
                            {selected.dialCode.charAt(0) !== "+"
                              ? `+${selected.dialCode}`
                              : selected.dialCode}
                          </div>
                        )}
                      </button>
                      <input
                        type="number"
                        name="mobile"
                        value={phone}
                        onChange={onPhoneChange}
                        placeholder="Enter your phone number"
                        className={`"phoneDialInput w-8/12 px-3 py-2 scrollbar-hide required:normal-nums text-sm outline-none bg-transparent placeholder:text-white placeholder:opacity-75" ${
                          errors.phone ? "" : "validInputBox"
                        }`}
                        maxLength={10}
                      />
                    </div>
                    {errors.phone ? (
                      <p className="inputBoxError">{errors.phone}</p>
                    ) : (
                      <p className="inputBoxError">{showError}<span className="text-white">{showSuccess}</span></p>)}
                  </div>
                  <div className="">
                    <div className="mt-1 flex relative items-center">
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
      {/* Modal */}
      <Dialog open={open} onClose={setOpen} className="relative z-50 bg-transparent opacity-100">
        <DialogBackdrop
          transition
          className="fixed inset-0  data-closed:opacity-1 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />
        {/* {isModalOpen && ( */}
        <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center z-50 glass-bg">
          <DialogPanel className="w-[604px] shadow-md  shadow-blue-400 h-[530px] scrollbar-hide  rounded-xl p-4 max-h-[80%] overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="text-white text-[16px] mb-4"
            >
              <span className="font-[22px]">&lt;</span> Back
            </button>
            <div className="w-full text-white mt-4 rounded-xl p-3 flex border focus:border-[#BED6FF] border-[#BED6FF] px-4">
              <img src={SearchIcon} alt="" className="w-5 h-5" />
              <input
                type="text"
                placeholder="Search for Countries"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none font-normal ml-1 placeholder:text-white px-2 text-sm w-full bg-transparent"
              />
            </div>

            <ul className="mt-6">
              {filtered.map((c) => (
                <li
                  key={c.isoCode}
                  onClick={() => {
                    setSelected(c);
                    setOpen(false);
                    setSearch("");
                  }}
                  className="flex items-center rounded-[5px] text-white text-sm font-normal px-3 py-2 hover:bg-blue-700 cursor-pointer"
                >
                  {React.createElement((Flags as any)[c.isoCode], {
                    title: c.name,
                    style: { width: "25px", marginRight: "12px" },
                  })}{" "}
                  {c.name}
                  {c.dialCode.charAt(0) !== "+" ? `+${c.dialCode}` : c.dialCode}
                </li>
              ))}
            </ul>
          </DialogPanel>
        </div>
        {/* )} */}
      </Dialog>
    </>
  );
}
