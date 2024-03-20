"use client";
import Link from "next/link";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReactCountryFlag from "react-country-flag";
import countryList from "react-select-country-list";
import { toast } from "react-toastify";
import userService from "@/services/user.service";
import { Metadata } from "next";
import { useRouter } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Sign Up Page",
//   description: "Sign up page",
//   // other metadata
// };

const SignupPage = () => {
  const router = useRouter();
  const countryDropdown = countryList().getData();
  const [phoneCode, setPhoneCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("CA"); // Default country code for Canada
  const [countryCode, setCountryCode] = useState("CA"); // Default country code for Canada
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");
  const [errorIndex, setErrorIndex] = useState(0);

  const handleOnChange = (value, selectedCountry) => {
    console.log("selectedCountry", selectedCountry);
    console.log("value", value);
    setPhoneCode(selectedCountry.dialCode);
    setPhone(value.replace(/[^0-9]/g, ""));
    // if (selectedCountry) {
    // setCountry(selectedCountry.value);
    // setCountryCode(selectedCountry.countryCode);
    // }
  };

  const handleCountryChange = (e: any) => {
    if (e.target.value) {
      const selectedCountry = countryDropdown.find(
        (country) => country.value === e.target.value,
      );
      console.log("selectedCountry", selectedCountry);
      setCountryCode(selectedCountry?.value);
      setCountry(selectedCountry?.label);
    }
  };

  console.log("country", country);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("firstName", firstName);
    console.log("lastName", lastName);
    console.log("email", email);
    console.log("password,", password);
    console.log("phone", phone);
    console.log("country", country);
    console.log("pincode", pincode);

    //validate the form
    if (!firstName) {
      toast.error("First Name is required");
      return;
    }
    if (!lastName) {
      toast.error("Last Name is required");
      return;
    }
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    if (!phone) {
      toast.error("Phone is required");
      return;
    }
    if (!country) {
      toast.error("Country is required");
      return;
    }
    if (!pincode) {
      toast.error("Pincode is required");
      return;
    }

    //regex for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email");
      return;
    }

    //in phone number add country code and remove any non numeric characters
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Invalid phone number");
      return;
    }

    //call the api
    const body = {
      firstName,
      lastName,
      email,
      password,
      phone: phoneCode + phone,
      country,
      pinCode: pincode,
    };
    console.log("body", body);

    userService
      .register(body)
      .then((response) => {
        console.log("response", response);
        if (response?.status === 201) {
          toast.success("Account created successfully");
          router.push("/signin");
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error?.response?.data?.message);
      });
  };

  console.log("phone", phone);

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Create your account
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  {/* It’s totally free and super easy */}
                </p>
                <form>
                  <div className="mb-8">
                    <label
                      htmlFor="first_name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      First Name{" "}
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="Enter your First Name"
                      value={firstName}
                      onChange={(e) => {
                        //email validation
                        const re = /^[a-zA-Z\s]*$/;
                        if (re.test(e.target.value)) {
                          setFirstName(e.target.value);
                        }
                      }}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="last_name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Last Name{" "}
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter your Last Name"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Email{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your Email"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Your Password{" "}
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your Password"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="country"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Country{" "}
                    </label>
                    {/* <select
                      name="country"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    > */}
                    {/* {countryDropdown.map((country) => (
                        <option value={country.value} key={country.value}>
                          {country.label}
                        </option>
                      ))} */}
                    {/* </select> */}
                    {/* <ReactCountryFlag
                      countryCode={countryCode}
                      svg
                      className="mr-2"
                      title={countryName}
                    /> */}
                    {countryCode && (
                      <ReactCountryFlag
                        countryCode={countryCode}
                        svg
                        className="mr-2"
                        title={countryCode}
                      />
                    )}

                    <select
                      name="country"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      onChange={handleCountryChange}
                    >
                      {countryDropdown.map((country) => (
                        <option value={country?.value} key={country?.value}>
                          {country?.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Phone{" "}
                    </label>
                    <PhoneInput
                      country={countryCode?.toLowerCase()}
                      value={phone}
                      onChange={handleOnChange}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="pincode"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Pincode{" "}
                    </label>
                    <input
                      type="number"
                      name="pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="Enter your pincode"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8 flex">
                    <label
                      htmlFor="checkboxLabel"
                      className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                    >
                      {/* <div className="relative">
                        <input
                          type="checkbox"
                          id="checkboxLabel"
                          className="sr-only"
                        />
                        <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                          <span className="opacity-0">
                            <svg
                              width="11"
                              height="8"
                              viewBox="0 0 11 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                fill="#3056D3"
                                stroke="#3056D3"
                                strokeWidth="0.4"
                              />
                            </svg>
                          </span>
                        </div>
                      </div> */}
                      {/* <span>
                        By creating account means you agree to the
                        <a href="#0" className="text-primary hover:underline">
                          {" "}
                          Terms and Conditions{" "}
                        </a>
                        , and our
                        <a href="#0" className="text-primary hover:underline">
                          {" "}
                          Privacy Policy{" "}
                        </a>
                      </span> */}
                    </label>
                  </div>
                  <div className="mb-6">
                    <button
                      className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      onClick={handleSubmit}
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Already using Startup?{" "}
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}
      </section>
    </>
  );
};

export default SignupPage;
