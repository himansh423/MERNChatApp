import { Link } from "react-router-dom"
import logo from "../assets/chatlogo.png"
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="bg-black flex py-7 px-8 pr-12 gap-7 flex-col text-white h-[400px] w-screen  ">
        <div className="flex justify-between sm:justify-evenly">
            <div className="flex text-[18px] flex-col gap-2">
              <h1 className="text-[20px] text-gray-500">Sitemap</h1>
              <Link to={'/createChatRoom'}>Create</Link>
              <Link to={'/enterChat'}>Enter</Link>
              <Link to={'/about'}>About</Link>
              <Link to={'/contact'}>Contact</Link>
            </div>
            <div className="flex text-[18px] flex-col gap-2">
            <h1 className="text-[20px] text-gray-500">Follow Us</h1>
              <a className=" flex items-center gap-1" href="https://www.instagram.com/codewithbyte?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_main">
              <div>
              <FaInstagram/>
              </div>
              Instagram</a>
              <a className=" flex items-center gap-1" href="https://x.com/Himansh423" target="_main" >
              <div>
              <FaXTwitter/>
              </div>
              X(Twitter)</a>
              <a className=" flex items-center gap-1" href="https://www.youtube.com/@codewithbyte" target="_main">
              <div>
              <FaYoutube/>
              </div>
              Youtube</a>
              <a className=" flex items-center gap-1" href="https://www.linkedin.com/in/himanshu-chauhan423/" target="_main">
              <div >
              <FaLinkedin/>
              </div>
              LinkedIn</a>
            </div>
        </div>
        <div className="flex text-[18px] flex-col gap-2">
          <h1 className="text-[20px] text-gray-500 ">Company</h1>
          <h1>CyroWeb Solutions.</h1>
        </div>
      </div>
      <div className="h-[190px]  text-white flex flex-col items-center gap-2 w-full border-t-2 bg-black border-gray-400">
          <img className="h-[150px] w-[150px] filter invert" src={logo} alt="" />
          <p>© 2024 CyroWeb. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
