import logo from "../assets/Rectangle 9.png"
import ins from '../assets/ant-design_instagram-outlined.png'
import lin from "../assets/ant-design_linkedin-outlined.png"
import twi from "../assets/ant-design_twitter-square-filled.png"
import fac from "../assets/Vector.png"

const Footer = () => {
  return (
    <div className="text-center  bg-[#010851] md:px-14 p-4 max-w-screen-2xl ">
      <div className=" lg:flex my-12 " >
        
        <div className="lg:w-2/5 lg:text-start ">
          <a href="" className="text-2xl  font-semibold  span-x-3 text-primary">
            <img src={logo} alt="" className="w-10 inline-block item-center " /><span className=" text-white ml-3">XYZ </span>
          </a>
          <p className=" text-white  mt-5">A simple paragraph is comprised of three major components. 
            The first sentence, which is often a declarative sentence.
          </p>
          <div className=" mt-5 ">
            <input type="email" name="email" id="email" placeholder="Your Email" className=" bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none
            " />
            <input type="submit" value="subscribe" className="py-2 px-4 bg-sicondary rounded-md -ml-2 *
            cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"/>
          </div>
        </div>
        
        <div className=" flex flex-col md:flex-row lg:w-3/5 flex-wrap justify-between gap-8 items-center ">
          <div className=" space-y-6 mt-5">
            <h4 className=" text-white text-xl">Platform</h4>
            <ul className=" space-y-3">
              <a href="/" className="block text-white hover:text-gray-300">Overview</a>
              <a href="/" className="block text-white hover:text-gray-300">Features</a>
              <a href="/" className="block text-white hover:text-gray-300">About</a>
              <a href="/" className="block text-white hover:text-gray-300">Pricing</a>
            </ul>
          </div>
          <div className=" space-y-4 mt-5">
            <h4 className=" text-white text-xl">Help</h4>
            <ul className=" space-y-3">
              <a href="/" className="block text-white hover:text-gray-300">How does it works?</a>
              <a href="/" className="block text-white hover:text-gray-300">Where to ask question?</a>
              <a href="/" className="block text-white hover:text-gray-300">How to play?</a>
              <a href="/" className="block text-white hover:text-gray-300">What is needed for this?</a>
            </ul>
          </div>
          <div className=" space-y-4 mt-5">
            <h4 className=" text-white text-xl">Contacts</h4>
            <ul className=" space-y-3">
              <p className=" text-white hover:text-gray-300">(012) 1234-567-890</p>
              <p className=" text-white hover:text-gray-300">123 xyz xyz</p>
              <p className=" text-white hover:text-gray-300">qwuerybaihefv, qiwu - hrebcl</p>
              <p className=" text-white hover:text-gray-300">095467 </p>
            </ul>
          </div>
        </div>
      </div> <hr />
      <div className="md:flex justify-between items-center w-auto text-center   my-8">
        <p className=" text-white">@ XYZ 20XX --- 20XX. All rights reserved.</p>
        <div className=" flex items-center justify-center mt-3 md:mt-0 space-x-5">
          <img src={fac} alt="" className=" w-8 cursor-pointer hover:translate-y-2 transition-all duration-300" />
          <img src={ins} alt="" className=" w-8 cursor-pointer hover:translate-y-2 transition-all duration-300" />
          <img src={twi} alt="" className=" w-8 cursor-pointer hover:translate-y-2 transition-all duration-300" />
          <img src={lin} alt="" className=" w-8 cursor-pointer hover:translate-y-2 transition-all duration-300" />
        </div>
      </div>

    </div>
  )
}

export default Footer