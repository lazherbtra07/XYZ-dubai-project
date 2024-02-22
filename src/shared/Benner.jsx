import {motion} from "framer-motion"
import { fadeIn } from "../variants"

const Benner = ({banner, heading, subheading, btn1, btn2}) => {
  return (
    <div className="gradientBg rounded-3xl rounded-br-[100px] md:p-9 px-4 py-9">
    <div className="flex flex-col md:flex-row-reverse  justify-between items-center gap-10">
      <motion.div
      variants={fadeIn("down",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7 }}
      >
        <img src={banner} alt=""  className="lg:has-[386px]:"/>
      </motion.div>
      <motion.div className="md:w-3/5"
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7 }}
            >
        <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">{heading}</h2>
        <p className="text-[#ebebeb] text-2xl mb-8">{subheading}</p>
        <div className="space-x-5 space-y-4">
          <button className="btnPrimary">{btn1}</button>
          <button className="btnPrimary">{btn2}</button>
        </div>
      </motion.div>
      
    </div>
  </div>
  )
}

export default Benner