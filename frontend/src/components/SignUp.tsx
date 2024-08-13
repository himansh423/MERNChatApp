import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register, verifyOtp, storeUserData } from "../utils/authUtils";
import styles from "./SignUp.module.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import exampleImg from "../assets/exampleImg.jpg"
import Loading from "./Loading";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [error, setError] = useState("");
  const [type, setType] = useState("password");
  const [buffer, setBuffer] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setBuffer(true);
    try {
      const response = await register(username, email, password);
      setUserId(response.userId);
      setShowOtpInput(true);
      setBuffer(false);  
    } catch (err) {
      setError("Registration failed");
      setBuffer(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setBuffer(true);  
    try {
      const userData = await verifyOtp(userId, otp);
      storeUserData(userData);
      navigate("/");
    } catch (err) {
      setError("OTP verification failed");
    } finally {
      setBuffer(false);  
    }
  };

  const handleShowPass = (arg: string) => {
    if (arg === "show") {
      setType("text");
    } else if (arg === "hide") {
      setType("password");
    }
  };

  return (
    <main className="bg-black py-4 h-[190vh] w-screen text-white">
      {error && <p className="text-center mb-5">{error}</p>}
      {buffer && (
        <Loading/>
      )}

      <div className="flex justify-center flex-col">
        <h1 className={`${styles.head} text-center font-bold`}>Sign up</h1>
        
        {!showOtpInput ? (
          <form
            onSubmit={handleSignUp}
            className="flex flex-col items-center mt-7 px-5"
          >
            <div className="flex flex-col lg:items-center gap-2 w-full ">
              <label htmlFor="name" className="px-1">
                Name*
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter your username..."
                className={`${styles.input} h-14 w-full border border-gray-400 lg:w-[500px] bg-[#171717] px-3 py-2 rounded-md`}
                name="name"
                id="name"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col lg:items-center gap-2 w-full mt-4">
              <label htmlFor="email" className="px-1">
                Email*
              </label>
              <input
                type="email"
                value={email}
                placeholder="Enter valid Email address.."
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`${styles.input} h-14 w-full border border-gray-400 lg:w-[500px] bg-[#171717] px-3 py-2 rounded-md`}
                name="email"
                id="email"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col lg:items-center gap-2 w-full mt-4">
              <label htmlFor="password" className="px-1">
                Password*
              </label>
              <div className="relative">
                {type === "password" ? (
                  <div
                    onClick={() => handleShowPass("show")}
                    className="absolute right-3 z-10 top-[19px] text-[20px]"
                  >
                    <FaRegEyeSlash />
                  </div>
                ) : (
                  <div
                    onClick={() => handleShowPass("hide")}
                    className="absolute right-3 z-10 top-[19px] text-[20px]"
                  >
                    <FaEye />
                  </div>
                )}

                <input
                  type={type}
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={`${styles.input} h-14 w-full border border-gray-400 lg:w-[500px] bg-[#171717] px-3 py-2 rounded-md`}
                  name="password"
                  id="password"
                  autoComplete="off"
                />
              </div>
            </div>
            <button
              type="submit"
              className={`${styles.SubmitButton}  lg:w-[500px] mt-7 w-full h-14 bg-gray-800 rounded-md text-white`}
            >
              Sign Up
            </button>
          </form>
        ) : (
          <div>
            <h1 className=" text-center px-4 mt-4">OTP successfully sent to your email address!</h1>
            <form
              onSubmit={handleVerifyOtp}
              className="flex flex-col items-center mt-7 px-5"
            >
              <div className="flex lg:items-center flex-col gap-2 w-full">
                <label htmlFor="otp" className="px-1">
                  Enter OTP*
                </label>
                <input
                  type="text"
                  value={otp}
                  placeholder="Enter your 6 digit OTP"
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className={`${styles.input} h-14 w-full border border-gray-400 lg:w-[500px] bg-[#171717] px-3 py-2 rounded-md`}
                  name="otp"
                  id="otp"
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                className={`${styles.SubmitButton} mt-7 w-full h-14 bg-gray-800 rounded-md lg:w-[500px] text-white`}
              >
                Verify OTP
              </button>
            </form>
            <div className="flex mt-5 flex-col items-center gap-4 px-4">
              <h1>NOTE!!!!</h1>
              <p className="text-center">in case of not receiving the email, check your email's <strong className="font-extrabold">spam</strong> folder</p>
              <div >
                <img className="h-[400px] w-[200px]" src={exampleImg} alt="" />
              </div>
            </div>
          </div>
        )}
        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUp;
