import { useState, useRef } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ email, username, password, phone });
  const [strength, setStrength] = useState(0);
  const [strengthLabel, setStrengthLabel] = useState(
    "Please Choose a strong password"
  );
  const formRef = useRef();

  // Per-field validation functions
  const validateEmail = (v) =>
    !v
      ? "Enter your email"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && "Invalid email";
  const validateUsername = (v) =>
    !v ? "Enter username" : v.length < 3 && "Username too short";
  const validatePassword = (v) =>
    !v ? "Enter password" : strength < 60 && "Password must be strong";
  const validatePhone = (v) =>
    !v ? "Enter phone" : !/^\d{10}$/.test(v) && "Phone must be 10 digits";

  // Calculate password strength
  // Calculate password strength
  const calcStrength = (v) => {
    let score = 0;
    if (v.length >= 8) score += 1;
    if (v.length >= 10) score += 1;
    if (/[0-9]/.test(v)) score += 1;
    if (/[a-z]/.test(v)) score += 1;
    if (/[A-Z]/.test(v)) score += 1;
    if (/[^A-Za-z0-9]/.test(v)) score += 1;

    setStrength(score);

    const label =
      score === 0
        ? "⚠️Choose a strong password"
        : score <= 2
        ? "⚠️Not valid"
        : score <= 4
        ? "⚠️Weak"
        : score <= 5
        ? "Medium"
        : score < 8
        ? "Strong"
        : score > 8
        ? "Strong"
        : "Very strong!";
    setStrengthLabel(label);
  };

  // Handle input changes
  const onEmailChange = (e) => {
    const v = e.target.value;
    setEmail(v);
    setErrors((prev) => ({ ...prev, email: validateEmail(v) || "" }));
  };
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
  const onPhoneChange = (e) => {
    const v = e.target.value;
    setPhone(v);
    setErrors((prev) => ({ ...prev, phone: validatePhone(v) || "" }));
  };

  // On form submit
  const onSubmit = (e) => {
    e.preventDefault();
    const newErrs = {
      email: validateEmail(email),
      username: validateUsername(username),
      password: validatePassword(password),
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
    } else {
      const data = { email, username, password, phone };
      console.log(data);
      localStorage.setItem("signupData", JSON.stringify(data));
      alert("Submitted!");
    }
  };

  const inputBase = `
    placeholder-black placeholder-opacity-75 bg-transparent text-black font-medium
    border border-[#BED6FF] rounded-xl px-4 text-sm w-full h-[46px]
    focus:outline-none focus:ring-2 focus:ring-[#BED6FF]`;

  return (
    <form
      ref={formRef}
      className="max-w-md mx-auto space-y-6"
      onSubmit={onSubmit}
    >
      {/* Email Field */}
      <div>
        <label className="block text-black mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          className={`${inputBase} ${errors.email ? "border-red-500" : ""}`}
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-red-400 mt-1">{errors.email}</p>}
      </div>

      {/* Username */}
      <div>
        <label className="block text-black mb-1">Username</label>
        <input
          type="text"
          value={username}
          onChange={onUsernameChange}
          className={`${inputBase} ${errors.username ? "border-red-500" : ""}`}
          placeholder="Your username"
        />
        {errors.username && (
          <p className="text-red-400 mt-1">{errors.username}</p>
        )}
      </div>

      {/* Password + Strength Meter */}
      <div>
        <label className="block text-black mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          className={`${inputBase} ${errors.password ? "border-red-500" : ""}`}
          placeholder="Create strong password"
        />
        {errors.password && (
          <p className="text-red-400 mt-1">{errors.password}</p>
        )}
        {password && (
          <>
            <div className="w-full bg-gray-700 h-2 rounded mt-2">
              <div
                className={`h-full rounded ${
                  strength <= 12
                    ? "bg-red-500"
                    : strength <= 8
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
                style={{
                  width: `${strength}%`,
                  transition: "width 0.3s",
                }}
              />{" "}
              
            </div>
            <p className="passwordStrength">{strengthLabel}</p>
          </>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-black mb-1">Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={onPhoneChange}
          className={`${inputBase} ${errors.phone ? "border-red-500" : ""}`}
          placeholder="10‑digit phone"
        />
        {errors.phone && <p className="text-red-400 mt-1">{errors.phone}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full"
      >
        Submit
      </button>
    </form>
  );
}
