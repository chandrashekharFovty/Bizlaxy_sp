// CompanyForm.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Country, State, City } from "country-state-city";
import { MultiSelect } from "react-multi-select-component";
// import "react-multiple-select-dropdown-lite/dist/index.css";
import "../../../customDropDwon.css"; // Assuming you have some custom styles

// import type { ICountry, IState, ICity } from "country-state-city";
type OptionType = { label: string; value: string };
// Options for MultiSelect businessType, industrySector, and businessModel
const businessTypes: OptionType[] = [
  { label: "Manufacturer", value: "manufacturer" },
  { label: "Wholesaler", value: "wholesaler" },
  { label: "Exporter", value: "exporter" },
  { label: "Importer", value: "importer" },
  { label: "Distributor", value: "distributor" },
  { label: "Retailer", value: "retailer" },
  { label: "Service Provider", value: "service_provider" },
  { label: "Trader", value: "trader" },
  { label: "Supplier", value: "supplier" },
  {
    label: "Other ", //(custom category for specific type of business not listed)
    value: "other",
  },
];
// Options for MultiSelect businessType, industrySector, and businessModel
const industrySectors = [
  { label: "Drugs & Pharmaceuticals", value: "drugs_pharmaceuticals" },
  { label: "Hospital & Diagnostics", value: "hospital_diagnostics" },
  { label: "Food & Beverages", value: "food_beverages" },
  {
    label: "Industrial Plants & Machinery",
    value: "industrial_plants_machinery",
  },
  { label: "Industrial Supplies", value: "industrial_supplies" },
  { label: "Building & Construction", value: "building_construction" },
  { label: "Apparel & Garments", value: "apparel_garments" },
  { label: "Electronics & Electrical", value: "electronics_electrical" },
  { label: "Packaging Machines & Goods", value: "packaging_machines_goods" },
  { label: "Chemicals, Dyes & Solvents", value: "chemicals_dyes_solvents" },
  { label: "Mechanical Parts & Spares", value: "mechanical_parts_spares" },
  { label: "Lab Instruments & Supplies", value: "lab_instruments_supplies" },
  { label: "Furniture & Supplies", value: "furniture_supplies" },
  { label: "Automobile, Parts & Spares", value: "automobile_parts_spares" },
  { label: "Agriculture & Farming", value: "agriculture_farming" },
  { label: "Housewares & Supplies", value: "housewares_supplies" },
  { label: "Metals, Alloys & Minerals", value: "metals_alloys_minerals" },
  { label: "Hand & Machine Tools", value: "hand_machine_tools" },
  { label: "Handicrafts & Decoratives", value: "handicrafts_decoratives" },
  {
    label: "Kitchen Utensils & Appliances",
    value: "kitchen_utensils_appliances",
  },
  { label: "Textiles, Yarn & Fabrics", value: "textiles_yarn_fabrics" },
  { label: "Books & Stationery", value: "books_stationery" },
  { label: "Cosmetics & Personal Care", value: "cosmetics_personal_care" },
  { label: "Home Textile & Furnishing", value: "home_textile_furnishing" },
  { label: "Engineering Services", value: "engineering_services" },
  { label: "Gems & Jewelry", value: "gems_jewelry" },
  { label: "Computer & IT Solutions", value: "computer_it_solutions" },
  { label: "Fashion Accessories & Gear", value: "fashion_accessories_gear" },
  { label: "Herbal & Ayurvedic Products", value: "herbal_ayurvedic_products" },
  { label: "Security Systems & Services", value: "security_systems_services" },
  { label: "Sports Goods, Toys & Games", value: "sports_toys_games" },
  { label: "Telecom Equipment & Goods", value: "telecom_equipment_goods" },
  { label: "Paper & Paper Products", value: "paper_paper_products" },
  { label: "Bags, Belts & Wallets", value: "bags_belts_wallets" },
  { label: "Media, PR & Publishing", value: "media_pr_publishing" },
  { label: "IT & Telecom Services", value: "it_telecom_services" },
  { label: "Transportation & Logistics", value: "transportation_logistics" },
  { label: "Business & Audit Services", value: "business_audit_services" },
  { label: "Financial & Legal Services", value: "financial_legal_services" },
  { label: "Call Center & BPO Services", value: "call_center_bpo_services" },
  { label: "Bicycle, Rickshaw & Spares", value: "bicycle_rickshaw_spares" },
  { label: "R&D and Testing Labs", value: "rnd_testing_labs" },
  { label: "Architecture & Interiors", value: "architecture_interiors" },
  { label: "HR Planning & Recruitment", value: "hr_planning_recruitment" },
  { label: "Rail, Shipping & Aviation", value: "rail_shipping_aviation" },
  { label: "Leather Products", value: "leather_products" },
  { label: "Electronics Components", value: "electronics_components" },
  { label: "Electrical Equipment", value: "electrical_equipment" },
  {
    label: "Hospital, Clinic & Consultation",
    value: "hospital_clinic_consultation",
  },
  { label: "OTHER", value: "other" },
];
// Options for MultiSelect businessType, industrySector, and businessModel
const businessModels = [
  { label: "B2B", value: "b2b" },
  { label: "B2C", value: "b2c" },
  { label: "SaaS", value: "saas" },
  { label: "E‑Commerce", value: "e_commerce" },
  { label: "Subscription", value: "subscription" },
  { label: "Marketplace", value: "marketplace" },
  { label: "Advertising Based", value: "advertising_based" },
  { label: "Franchise", value: "franchise" },
  { label: "Other", value: "other" },
];

type Form = {
  businessType: string[];
  industrySector: string[];
  country: string;
  state: string;
  city: string;
  referrals: string[];
};

type Errors = Partial<Record<keyof Form, string>>;
type Touched = Partial<Record<keyof Form, boolean>>;

const CompanyForm: React.FC = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    fetch("/countries_states_cities.json") // remove ../../.. for public/ path
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load countries:", err));
  }, []);

  const [form, setForm] = useState<Form>({
    businessType: [],
    industrySector: [],
    country: "",
    state: "",
    city: "",
    referrals: [],
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Touched>({});
  const [businessvalue, setbusinessvalue] = useState();
  const [industryvalue, setindustryvalue] = useState();
  //const [valuebusinessModel, setvaluebusinessModel] = useState();
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState<
    OptionType[]
  >([]);
  const [selectedIndustries, setSelectedIndustries] = useState<OptionType[]>(
    []
  );
  // const [selectedBusinessModels, setSelectedBusinessModels] = useState<
  //   OptionType[]
  // >([]);

  const [selected, setSelected] = useState<OptionType[]>([]);
  const handleOnbusinesschange = (val) => {
    setbusinessvalue(val);
    handleChange(val);
  };
  const handleOnindustrychange = (val) => {
    setindustryvalue(val);
    handleChange(val);
  };
  // const handleOnbusinessModelchange = (val) => {
  //   setvaluebusinessModel(val);
  //   handleChange(val);
  // };

  form.businessType = businessvalue;
  form.industrySector = industryvalue;
  //form.businessModel = valuebusinessModel;

  const validators: Record<keyof Form, (v: any) => string> = {
   // companyName: (v) => (v.length < 3 ? "At least 5 characters required" : ""),
    businessType: (v) => (!v ? "Pick at least one" : ""),
    industrySector: (v) => (!v ? "Pick at least one" : ""),
   // businessModel: (v) => (!v ? "Pick at least one" : ""),
   // companyStage: (v) => (!v ? "Please select a stage" : ""),
   // minFunding: (v) => (!v ? "Required" : ""),
    // maxFunding: (v) => {
    //   if (!v) return "Required";
    //   if (form.minFunding && Number(v) < Number(form.minFunding))
    //     return "Max must be ≥ Min";
    //   return "";
    // },
    country: (v) => (!v ? "Required" : ""),
    state: (v) => (!v ? "Required" : ""),
    city: (v) => (!v ? "Required" : ""),
    referrals: (v) => (v.length === 0 ? "Pick at least one" : ""),
  };

  const validateField = (name: keyof Form, value: any) => {
    const err = validators[name](value);
    setErrors((prev) => ({ ...prev, [name]: err }));
    return err;
  };

  const isValid = Object.keys(validators).every((key) => {
    const k = key as keyof Form;
    return !validators[k](form[k]);
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const key = name as keyof Form;

    const updatedValue =
      type === "checkbox"
        ? form.referrals.includes(value)
          ? form.referrals.filter((r) => r !== value)
          : [...form.referrals, value]
        : value;

    setForm((prev) => ({ ...prev, [key]: updatedValue }));

    // if (touched[key]) {
    //   validateField(key, updatedValue);
    //   if (key === "minFunding") {
    //     validateField("maxFunding", form.maxFunding);
    //   }
    // }
  };

  const handleBlur = (e: React.FocusEvent<any>) => {
    const key = e.target.name as keyof Form;
    setTouched((prev) => ({ ...prev, [key]: true }));
    validateField(key, form[key]);
  };

  // const handleStageSelect = (stage: string) => {
  //   setForm((prev) => ({ ...prev, companyStage: stage }));
  //   //setTouched((prev) => ({ ...prev, companyStage: true }));
  //   validateField("companyStage", stage);
  // };
  //Progress bar simulation
  const progressbarArray = Object.keys(form).map((key) => {
    key = key as keyof Form;
    return form[key] ? 1 : 0;
  });
  const progress = progressbarArray.reduce((acc, curr) => acc + curr, 0);
  const progressPercentage = (progress / progressbarArray.length) * 100;
  console.log("Progress Percentage:", progressPercentage);
  // Simulate progress bar width
  const progressBarWidth = `${Math.min(progressPercentage, 100)}%`;
  //console.log("Progress Bar Width:", progressBarWidth);

  // Update the width of the progress bar dynamically
  const progressBarStyle = {
    width: progressBarWidth,
  };
  //console.log("Progress Bar Style:", progressBarStyle);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // run full validation
    (Object.keys(validators) as (keyof Form)[]).forEach((k) => {
      setTouched((prev) => ({ ...prev, [k]: true }));
      validateField(k, form[k]);
    });
    if (!isValid) return;

    const fd = new FormData(e.currentTarget);
    //console.log("FormData:", Object.fromEntries(fd.entries()));
    // Use the progressBarStyle in your JSX if needed
    // For example, you can apply it to a div or a progress bar component
    //console.log("Is Valid:", isValid);
    console.log("Form Data:", form);
    navigate("/feed");
  };

  return (
    <>                                                                    
      <div className="w-full h-auto">
        <div className="fixed w-full flex gap-1">
          {progressbarArray.map((_, index) => (
            <div
              className="w-[10%] bg-gray-200 rounded-full h-2.5 mb-4 "
              key={index}
            >
              <div
                className={`bg-gradient-to-tr from-indigo-600 to-purple-500 h-2.5 rounded-full ${
                  index < progress ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <form
          onSubmit={onSubmit}
          encType="multipart/form-data"
          className="w-full overflow-scroll scrollbar-hide mt-[4%] h-[600px] flex flex-col gap-5 z-10"
        >
          <div className="w-[97%] overflow-scroll scrollbar-hide mt-[3%] h-[600px] flex flex-col gap-5 z-10">
            {/* Company Name */}
            {/* <div className="w-full  flex flex-col mx-auto">
              <label className="text-sm font-medium">Company Name</label>
              <input
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your company name here"
                className="w-full h-[60px] placeholder:text-black mt-2 outline-[#BED3FF] border border-[#BED6FF] rounded-xl px-7 text-sm"
              />
              {errors.companyName && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.companyName}
                </div>
              )}
            </div> */}

            {/* Business Type */}
            <div className="w-full  flex flex-col mx-auto">
              <label className="text-sm font-medium">Business Type</label>
              {/* MultiSelect Component */}
              <div className="w-full mt-2">
                <MultiSelect
                  options={businessTypes}
                  value={selectedBusinessTypes}
                  onChange={setSelectedBusinessTypes}
                  labelledBy="Business Type"
                  hasSelectAll
                  className="rmsc w-full h-[60px] placeholder:text-black mt-2 outline-[#BED3FF] border border-[#BED6FF] rounded-xl px-4 text-sm"
                />
              </div>

              {errors.businessType && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.businessType}
                </div>
              )}
            </div>

            {/* Industry Sector */}
            <div className="w-full  flex flex-col mx-auto">
              <label className="text-sm font-medium">Industry & Sector</label>
              {/* MultiSelect Component */}
              <div className="w-full mt-2">
                <MultiSelect
                  options={industrySectors}
                  value={selectedIndustries}
                  onChange={setSelectedIndustries}
                  labelledBy="Industry & Sector"
                  hasSelectAll
                  className="rmsc w-full h-[60px] placeholder:text-black mt-2 outline-[#BED3FF] border border-[#BED6FF] rounded-xl px-4 text-sm"
                />
              </div>

              {errors.industrySector && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.industrySector}
                </div>
              )}
            </div>

            {/* Business Model */}
            {/* <div className="w-full  flex flex-col mx-auto">
              <label className="text-sm font-medium">Business Model</label>
              {/* MultiSelect Component */}
              {/* <div className="w-full mt-2">
                <MultiSelect
                  options={businessModels}
                  value={selectedBusinessModels}
                  onChange={setSelectedBusinessModels}
                  labelledBy="Business Model"
                  hasSelectAll
                  className="rmsc w-full h-[60px] placeholder:text-black mt-2 outline-[#BED3FF] border border-[#BED6FF] rounded-xl px-4 text-sm"
                />
              </div>

              {errors.businessModel && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.businessModel}
                </div>
              )}
            </div> */}
            {/* Stage */}
            {/* <div className="w-full flex flex-col mx-auto">
              <label className="text-sm font-medium">Stage</label>
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => handleStageSelect("Early")}
                  className={`px-3 py-2 rounded-[6px] w-auto ${
                    form.companyStage === "Early"
                      ? "bg-gradient-to-br from-indigo-600 to-purple-500 text-white"
                      : "bg-[#EAF6FF]"
                  } border border-[#BED6FF] text-sm`}
                >
                  Early Stage
                </button>
                <button
                  type="button"
                  onClick={() => handleStageSelect("Growth")}
                  className={`px-3 py-2 rounded-[6px] w-auto ${
                    form.companyStage === "Growth"
                      ? "bg-gradient-to-br from-indigo-600 to-purple-500 text-white"
                      : "bg-[#EAF6FF]"
                  } border border-[#BED6FF] text-sm`}
                >
                  Growth Stage
                </button>
                <button
                  type="button"
                  onClick={() => handleStageSelect("Mature")}
                  className={`px-3 py-2 rounded-[6px] w-auto ${
                    form.companyStage === "Mature"
                      ? "bg-gradient-to-br from-indigo-600 to-purple-500 text-white"
                      : "bg-[#EAF6FF]"
                  } border border-[#BED6FF] text-sm`}
                >
                  Mature Stage
                </button>
              </div>
              {errors.companyStage && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.companyStage}
                </div>
              )}
            </div> */}
            {/* <div className="w-full flex flex-col mx-auto">
              <label className="text-sm font-medium">
                Amount Required for Funding
              </label>
              <div className="w-full h-[46px] flex flex-row justify-between items-center mt-1">
                {/* Funding Range: Min */}
                {/* <div className="w-5/12 flex flex-col">
                  <input
                    type="number"
                    name="minFunding"
                    placeholder="Min"
                    value={form.minFunding}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full h-[46px] placeholder:text-black mt-2 outline-[#BED3FF] border border-[#BED6FF] rounded-xl px-7 text-sm"
                  />
                  {errors.minFunding && (
                    <div className="text-red-500 text-sm">
                      {errors.minFunding}
                    </div>
                  )}
                </div>
                <div className="w-1/12 h-[1px] bg-black"></div> */}
                {/* Funding Range: Max */}
                {/* <div className="w-5/12 flex flex-col">
                  <input
                    type="number"
                    name="maxFunding"
                    placeholder="Max"
                    value={form.maxFunding}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full h-[46px] placeholder:text-black mt-2 outline-[#BED3FF] border border-[#BED6FF] rounded-xl px-7 text-sm"
                  />
                  {errors.maxFunding && (
                    <div className="text-red-500 text-sm">
                      {errors.maxFunding}
                    </div>
                  )}
                </div>
              </div>
            </div> */} 
             {/* Country */}
            <div className="w-full flex flex-col mx-auto">
              <label className="text-sm font-medium">Country</label>
              <select
                name="country"
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedState(""); // reset state
                  setForm((prev) => ({
                    ...prev,
                    country: e.target.value,
                    state: "",
                    city: "",
                  }));
                  setTouched((prev) => ({ ...prev, country: true }));
                  validateField("country", e.target.value);
                }}
                onBlur={handleBlur}
                className="mt-2 w-full h-[60px] outline-[#BED6FF] placeholder:text-gray-300 border border-[#BED6FF] rounded-xl px-7 text-sm"
              >
                <option value="" disabled>
                  Select Country
                </option>
                {data.map((c: any) => (
                  <option key={c.countryCode} value={c.name}>
                    {c.name} {c.flag ? `(${c.flag})` : ""}
                  </option>
                ))}
              </select>
              {errors.country && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.country}
                </div>
              )}
            </div>

            {/* State */}
            <div className="w-full  flex flex-col mx-auto">
              <label className="text-sm font-medium">State</label>
              <select
                name="state"
                value={selectedState}
                onChange={(e) => {
                  const stateVal = e.target.value;
                  setSelectedState(stateVal);
                  setForm((prev) => ({
                    ...prev,
                    state: stateVal,
                    city: "", // reset city
                  }));
                  setTouched((prev) => ({ ...prev, state: true }));
                  validateField("state", stateVal);
                }}
                onBlur={handleBlur}
                className="mt-2 w-full h-[60px] outline-[#BED6FF] placeholder:text-gray-300 border border-[#BED6FF] rounded-xl px-7 text-sm"
              >
                <option value="" disabled>
                  Select State
                </option>
                {/* Render states from selected country */}
                {data
                  .find((c) => c.name === selectedCountry)
                  ?.states?.map((state: any, idx: number) => (
                    <option key={idx} value={state.name}>
                      {state.name}
                    </option>
                  ))}
              </select>
              {errors.state && (
                <div className="text-red-500 text-sm mt-1">{errors.state}</div>
              )}
            </div>

            {/* City */}
            <div className="w-full  flex flex-col mx-auto">
              <label className="text-sm font-medium">City</label>
              <select
                name="city"
                value={form.city}
                onChange={(e) => {
                  const cityVal = e.target.value;
                  setForm((prev) => ({
                    ...prev,
                    city: cityVal,
                  }));
                  setTouched((prev) => ({ ...prev, city: true }));
                  validateField("city", cityVal);
                }}
                onBlur={handleBlur}
                className="mt-2 w-full h-[60px] outline-[#BED6FF] placeholder:text-gray-300 border border-[#BED6FF] rounded-xl px-7 text-sm"
              >
                <option value="" disabled>
                  Select City
                </option>
                {data
                  .find((country) => country.name === selectedCountry)
                  ?.states.find((state) => state.name === selectedState)
                  ?.cities.map((city: any, idx: number) => (
                    <option key={idx} value={city.name}>
                      {city.name}
                    </option>
                  ))}
              </select>
              {errors.city && (
                <div className="text-red-500 text-sm mt-1">{errors.city}</div>
              )}
            </div>

            {/* Referrals */}
            <div className="w-full  flex flex-col mx-auto">
              <fieldset className="w-full h-[60px] flex flex-col gap-2">
                <legend className="text-sm font-medium mb-2">
                  How did you hear about us?
                </legend>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="referrals"
                    value="Facebook"
                    checked={form.referrals.includes("Facebook")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />{" "}
                  Facebook
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="referrals"
                    value="Instagram"
                    checked={form.referrals.includes("Instagram")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />{" "}
                  Instagram
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="referrals"
                    value="YouTube"
                    checked={form.referrals.includes("YouTube")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />{" "}
                  YouTube
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="referrals"
                    value="Friend"
                    checked={form.referrals.includes("Friend")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />{" "}
                  Friend
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="referrals"
                    value="Others"
                    checked={form.referrals.includes("Others")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />{" "}
                  Others
                </label>
              </fieldset>
              {errors.referrals && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.referrals}
                </div>
              )}
            </div>
          </div>
        </form>
        {/* Submit */}
        <div className="fixed h-8 w-full">
          <div className="w-[67%] h-full flex justify-end">
            <button
              onClick={() => {
                onSubmit;
              }}
              type="submit"
              disabled={!isValid}
              className={`w-[122px] h-[51px] rounded-xl font-semibold text-lg ${
                isValid
                  ? "bg-[#1C4BC4] text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyForm;