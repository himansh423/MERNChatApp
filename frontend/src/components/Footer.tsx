import logo from "../assets/chatlogo.png"

const Footer = () => {
  return (
    <footer>
      <div className="bg-black flex py-7 px-8 pr-12 gap-7 flex-col text-white h-[400px] w-screen ">
        <div className="flex justify-between">
            <div className="flex text-[18px] flex-col gap-2">
              <h1 className="text-[20px] text-gray-500">Sitemap</h1>
              <a href="">Create</a>
              <a href="">Enter</a>
              <a href="">About</a>
              <a href="">Contact</a>
            </div>
            <div className="flex text-[18px] flex-col gap-2">
            <h1 className="text-[20px] text-gray-500">Follow Us</h1>
              <a href="">Instagram</a>
              <a href="">X(Twitter)</a>
              <a href="">Facebook</a>
              <a href="">Youtube</a>
              <a href="">LinkedIn</a>
            </div>
        </div>
        <div className="flex text-[18px] flex-col gap-2">
          <h1 className="text-[20px] text-gray-500 ">Company</h1>
          <h1 >CyroWeb Solutions.</h1>
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
