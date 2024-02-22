import { useState } from "react"


const Pricing = () => {
const [isYearly, setisYearly] = useState(false);
const Packages = [
  {name:"start", monthlyPrice:45, yearlyPrice:130, description:"A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",green: "/src/assets/Rectangle 18.png",red: "/src/assets/Ellipse 26.png"},
  {name:"Advance", monthlyPrice:86, yearlyPrice:170, description:"A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",green: "/src/assets/Rectangle 18.png",red: "/src/assets/Ellipse 26.png"},
  {name:"Premium", monthlyPrice:120, yearlyPrice:220, description:"A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.", green: "/src/assets/Rectangle 18.png",red: "/src/assets/Ellipse 26.png"}
]



  return (
    <div className="md:px-14 p-4 max-w-s py-10" id="Pricing">
      <div className="text-center"> 
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Here are all our plans</h2>
        <p className="text-tartialy md:w-1/3 mx-auto px-4">A simple paragraph is comprised of three major components.
          The which is often a declarative sentence.
        </p>
        {/* toggele pricing */}
        <div className="mt-16">
          <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
            <span className="mr-8 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-out">
              <div className={`w-6 h-6 bg-primary rounded-full transition duration-200 ease-out 
              ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}>

              </div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input type="checkbox" name="" id="toggle" className="hidden" checked={isYearly} onChange={() => setisYearly(!isYearly)} />
        </div>
      </div>
      {/* pricing card */}
      <div className="grid sm:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
        {
          Packages.map((pkg, index) =>  <div key={index} className=" border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
            <h3 className=" text-3xl font-bold text-center text-primary">{pkg.name}</h3>
            <p className=" text-tartiry text-center my-5">{pkg.description}</p>
            <p className=" mt-5 text-center text-sicondary text-4xl font-bold">
              {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`} <span className=" text-base text-tartiry font-medium">/{isYearly ? "Year" : "Month"}</span>
            </p>

            <ul className=" mt-4 space-y-2 px-4">
              <li className=" flex gap-3 items-center text-xs"><img src={pkg.green} alt="" className=" w-5 h-5" />Videos of Lessons</li>
              <li className=" flex gap-3 items-center text-xs"><img src={pkg.green} alt="" className=" w-5 h-5" />Homework check</li>
              <li className=" flex gap-3 items-center text-xs"><img src={pkg.green} alt="" className=" w-5 h-5" />Additional practical task</li>
              <li className=" flex gap-3 items-center text-xs"><img src={pkg.green} alt="" className=" w-5 h-5" />Monthly conferences </li>
              <li className=" flex gap-3 items-center text-xs"><img src={pkg.red} alt="" className=" w-5 h-5" />Personal advice from teachers</li>
            </ul>
            <div className=" text-center mt-8">
              <button className="btnPrimary">Get Started</button>
            </div>

          </div>)
        }
      </div>
    </div>
  )
}

export default Pricing