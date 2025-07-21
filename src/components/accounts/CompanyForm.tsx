import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompanyForm = () => {
  const navigate = useNavigate();

  // --- 1. Setup form state
  const [form, setForm] = useState({
    companyName: "",
    businessType: "",
    industrySector: "",
    businessModel: "",
    companyStage: "", // e.g. "early", "growth", "mature"
    minFunding: "",
    maxFunding: "",
    state: "",
    city: "",
    referrals: [] as string[],
  });

  const [error, setError] = useState({
    form,
  });

  const validatecompanyName = (v) =>
    !v
      ? `Please Enter your username`
      : v.length < 3 && "Your username too short";

      //add rest of all validation here

   const oncompanyName = (e) => {
    const v = e.target.value;
    setForm(v);
    setError((prev) => ({ ...prev, username: validatecompanyName(v) || "" }));
  };
  // --- 2. Generic change handler for inputs/selects
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, ariaChecked } = e.target;

    if (type === "checkbox") {
      setForm((prev) => {
        const newArr = prev.referrals.includes(value)
          ? prev.referrals.filter((v) => v !== value)
          : [...prev.referrals, value];
        return { ...prev, referrals: newArr };
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // --- 3. Handle company stage button clicks
  const handleStageSelect = (stage: string) => {
    setForm((prev) => ({ ...prev, companyStage: stage }));
  };

  // --- 4. Submission handler
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => formData.append(key, item));
      } else {
        formData.append(key, value);
      }
    });

    // DEBUG: inspect
    for (const [key, val] of formData.entries()) {
      console.log(key, val);
    }

    // Convert to plain obj if needed
    const obj: Record<string, any> = {};
    for (const [key, val] of formData.entries()) {
      if (obj[key]) {
        if (Array.isArray(obj[key])) obj[key].push(val);
        else obj[key] = [obj[key], val];
      } else {
        obj[key] = val;
      }
    }
    console.log("Submitted payload:", obj);
  };
  // const onSubmit = (data: any) => {
  //   console.log("Form submitted:", data);
  //   navigate("/feed");
  // };
  return (
    <>
      <div className="w-full h-[8px] mt-5 mb-5 bg-transparent rounded-xl cursor-pointer flex gap-1">
        <progress
          value={100}
          className="rounded-[6px] bg-[#C7D3EB]  w-1/6 h-[6.5px]"
        />
        <progress
          value={0}
          max={100}
          className="rounded-[6px] bg-[#C7D3EB]  w-1/6 h-[6.5px]"
        />
        <progress
          value={0}
          max={100}
          className="rounded-[6px] bg-[#C7D3EB]  w-1/6 h-[6.5px]"
        />
        <progress
          value={0}
          max={100}
          className="rounded-[6px] bg-[#C7D3EB]  w-1/6 h-[6.5px]"
        />
        <progress
          value={0}
          max={100}
          className="rounded-[6px] bg-[#C7D3EB]  w-1/6 h-[6.5px]"
        />
        <progress
          value={0}
          max={100}
          className="rounded-[6px] bg-[#C7D3EB]  w-1/6 h-[6.5px]"
        />
      </div>
      <div className="w-full h-auto">
        <form onSubmit={onSubmit} className="w-full h-full flex flex-col gap-6">
          <div className="w-full min-w-[952px] h-[90px] flex flex-col justify-end mx-auto">
            <label
              className="h-[18px] text-sm font-medium"
              htmlFor="comapanyname"
            >
              Company Name
            </label>
            <div className="w-full h-[60px] mt-2">
              <input
                type="text"
                value={form.companyName}
                name="companyName"
                onChange={handleChange}
                placeholder="Enter your company name"
                className="border border-[#BED6FF] outline-[#BED6FF] rounded-xl font-normal text-sm w-full h-full p-7"
              />
            </div>
          </div>
          <div className="w-full min-w-[952px] h-[90px] flex flex-col justify-end mx-auto">
            <label
              className="h-[18px] text-sm font-medium"
              htmlFor="businessType"
            >
              Business Type
            </label>
            <div className="w-full h-[60px] mt-2">
              <select
                value={form.businessType}
                onChange={handleChange}
                name="businessType"
                id="businessType"
                className="text-black border border-[#BED6FF] outline-[#BED6FF] rounded-xl font-normal text-sm w-full h-full px-7"
              >
                <option value="defau lt" className="text-[#797575]">
                  Select Business Type
                </option>
                <option value="manufacturer" className="text-[#090914]">
                  Manufacturer
                </option>
              </select>
            </div>
          </div>
          <div className="w-full min-w-[952px] h-[90px] flex flex-col justify-end mx-auto">
            <label
              className="h-[18px] text-sm font-medium"
              htmlFor="industrySector"
            >
              Industry & Sector
            </label>
            <div className="w-full h-[60px] mt-2">
              <select
                value={form.industrySector}
                onChange={handleChange}
                name="industrySector"
                id="industrySector"
                className="text-black border border-[#BED6FF] outline-[#BED6FF] rounded-xl font-normal text-sm w-full h-full px-7"
              >
                <option value="default" className="text-[#707070]">
                  Select Industry/Sector
                </option>
                <option value="manufacturer" className="text-[#090914]">
                  Manufacturer
                </option>
              </select>
            </div>
          </div>
          <div className="w-full min-w-[952px] h-[90px] flex flex-col justify-end mx-auto">
            <label
              className="h-[18px] text-sm font-medium"
              htmlFor="businessModel"
            >
              Business Model
            </label>
            <div className="w-full h-[60px] mt-2">
              <select
                value={form.businessModel}
                onChange={handleChange}
                name="businessModel"
                id="businessModel"
                className="text-black border border-[#BED6FF] outline-[#BED6FF] rounded-xl font-normal text-sm w-full h-full px-7"
              >
                <option value="default" className="text-[#707070]">
                  Select Business Model
                </option>
                <option value="manufacturer" className="text-[#090914]">
                  Manufacturer
                </option>
              </select>
            </div>
          </div>
          <div className="w-full min-w-[952px] h-[64px] flex flex-col justify-end mx-auto">
            <label
              className="h-[18px] text-sm font-medium"
              htmlFor="comapanyname"
            >
              Stage of Company
            </label>
            <div className="w-full h-[34px] mt-2 flex gap-3">
              {["Early Stage", "Growth stage", " Mature stage"].map((stage) => (
                <button
                  key={stage}
                  type="button"
                  className={`px-4 py-1 rounded ${
                    form.companyStage === stage
                      ? "w-auto h-full bg-[#bce2fd] border border-[#BED6FF] rounded-[6px] px-2 py-auto text-sm font-normal"
                      : "w-auto h-full bg-[#EAF6FF] border border-[#BED6FF] rounded-[6px] px-2 py-auto text-sm font-normal"
                  }`}
                  onClick={() => handleStageSelect(stage)}
                >
                  {stage.charAt(0).toUpperCase() + stage.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full min-w-[952px] h-[74px] flex flex-col justify-end mx-auto">
            <label
              className="h-[18px] text-sm font-medium"
              htmlFor="comapanyname"
            >
              Amount Required for Funding
            </label>
            <div className="w-full flex justify-between items-center">
              <div className="w-[40%] h-[46px] mt-2 flex justify-center items-center border border-[#BED6FF] outline-[#BED6FF] rounded-xl">
                <input
                  type="number"
                  value={form.minFunding}
                  name="minFunding"
                  onChange={handleChange}
                  placeholder="Min"
                  className=" font-normal text-sm p-3 outline-none text-center"
                />
              </div>
              <div className="border-[#707070] w-[46px] mt-2 border"></div>
              <div className="w-[40%] h-[46px] mt-2 flex justify-center items-center border border-[#BED6FF] outline-[#BED6FF] rounded-xl">
                <input
                  type="number"
                  value={form.maxFunding}
                  onChange={handleChange}
                  name="maxFunding"
                  placeholder="Max"
                  className="font-normal text-sm p-3 outline-none text-center"
                />
              </div>
            </div>
          </div>
          <div className="w-full min-w-[952px] h-[90px] flex flex-col justify-end mx-auto">
            <label
              className="h-[18px] text-sm font-medium"
              htmlFor="businesstype"
            >
              State
            </label>
            <div className="w-full h-[60px] mt-2">
              <select
                name="businesstype"
                value={form.state}
                onChange={handleChange}
                id="businesstype"
                className="text-black border border-[#BED6FF] outline-[#BED6FF] rounded-xl font-normal text-sm w-full h-full px-7"
              >
                <option value="default" className="text-[#707070]">
                  Select State
                </option>
                <option value="manufacturer" className="text-[#090914]">
                  Madhya Pradesh
                </option>
                <option value="manufacturer" className="text-[#090914]">
                  Maharashtra
                </option>
                <option value="manufacturer" className="text-[#090914]">
                  Gujarat
                </option>
              </select>
            </div>
          </div>
          <div className="w-full min-w-[952px] h-[90px] flex flex-col justify-end mx-auto">
            <label
              className="h-[18px] text-sm font-medium"
              htmlFor="businesstype"
            >
              City
            </label>
            <div className="w-full h-[60px] mt-2">
              <select
                value={form.city}
                onChange={handleChange}
                name="businesstype"
                id="businesstype"
                className="text-black border border-[#BED6FF] outline-[#BED6FF] rounded-xl font-normal text-sm w-full h-full px-7"
              >
                <option value="default" className="text-[#707070]">
                  Select City
                </option>
                <option value="manufacturer" className="text-[#090914]">
                  Indore
                </option>
                <option value="manufacturer" className="text-[#090914]">
                  Bhopal
                </option>
                <option value="manufacturer" className="text-[#090914]">
                  Ujjain
                </option>
              </select>
            </div>
          </div>
          <div className="w-full min-w-[952px] h-[190px] flex flex-col mx-auto">
            <p className="h-[18px] w-full text-black text-md font-medium mb-2">
              How Do You Hear About Us
            </p>
            <div className="space-y-2">
              {["Facebook", "Instagram", "Youtube", "Friend", "Others"].map(
                (ref) => (
                  <label key={ref} className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      name="referrals"
                      value={ref}
                      checked={form.referrals.includes(ref)}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 rounded focus:btn-gradient border-gray-300"
                    />
                    {ref}
                  </label>
                )
              )}
            </div>
          </div>
          <div className="w-[952px] h-[90px] flex flex-col justify-center items-end">
            {FormData ? (
              <button className="bg-[#1C4BC4] w-[122px] h-[51px] text-lg font-semibold text-white px-4 py-2 rounded-xl">
                Submit
              </button>
            ) : (
              <button className="w-[122px] h-[51px] text-lg font-semibold text-white px-4 py-2 rounded-xl border-[#B0B0B0] bg-gray-300 cursor-not-allowed">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default CompanyForm;
