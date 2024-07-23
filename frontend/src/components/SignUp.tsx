import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main className="bg-black py-4 h-screen w-screen text-white">
      <div className="flex justify-center flex-col">
        <h1 className={`${styles.head} text-center font-bold`}>Sign up</h1>
        <p className="text-center mt-2 text-gray-600 text-[13px]">
          Sign-up with One Of the Following options.
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
        </div>

        <form className="flex flex-col items-center mt-7 px-5">
        <div className="flex flex-col gap-2 w-full ">
            <label htmlFor="name" className="px-1">Name*</label>
            <input
              type="text"
              className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
              name="name"
              id="name"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-2 w-full mt-4">
            <label htmlFor="email" className="px-1">Email*</label>
            <input
              type="email"
              className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
              name="email"
              id="email"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-2 w-full  mt-4">
            <label htmlFor="password" className="px-1">Password*</label>
            <input
              type="password"
              className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
              name="password"
              id="password"
              autoComplete="off"
            />
          </div>

          <button className={`${styles.SubmitButton} mt-7 w-full h-14 bg-purple-600  text-white py-2 px-4 rounded`}>Sign up</button>
        </form>

        <p className="text-center mt-6">
          Already have an account? <Link to={'/login'} className="text-blue-500 cursor-pointer">Login</Link>
        </p>
      </div>
    </main>
  );
};

export default SignUp;
