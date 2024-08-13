import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, storeUserData } from "../utils/authUtils";
import styles from "./Login.module.css";
// import { FaGithub,  FaGoogle } from 'react-icons/fa';
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [type, setType] = useState("password");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await login(email, password);
      storeUserData(userData);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials");
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
    <main className="bg-black py-4 h-screen w-screen text-white">
      {error && <p>{error}</p>}
      <div className="flex justify-center flex-col">
        <h1 className={`${styles.head} text-center font-bold`}>Login</h1>
        {/* <p className="text-center mt-2 text-gray-600 text-[13px]">
          Login with One Of the Following options.
        </p>
        <div className="flex w-screen p-3 gap-3 mt-3">
          <button
            className={`${styles.buttonOf} w-1/2 h-14 border  border-gray-400 rounded-md flex justify-center items-center bg-[#171717]`}
          >
            <FaGoogle fontSize={30} />
          </button>
          <button
            className={`${styles.buttonOf} w-1/2 h-14 border  border-gray-400 rounded-md flex justify-center items-center bg-[#171717]`}
          >
            <FaGithub fontSize={30} />
          </button>
        </div> */}

        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center mt-7 px-5"
        >
          <div className="flex flex-col gap-2 w-full ">
            <label htmlFor="email" className="px-1">
              Email*
            </label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-2 w-full  mt-4">
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
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
                name="password"
                id="password"
              />
            </div>
          </div>

          <button
            className={`${styles.SubmitButton} mt-7 w-full h-14 bg-purple-600  text-white py-2 px-4 rounded`}
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-blue-500 cursor-pointer">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
