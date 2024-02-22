import img1 from "../assets/undraw_Reading_time_re_phf7 2.png"
import img2 from "../assets/undraw_My_universe_803e 1.png"
import {motion} from 'framer-motion'
import { fadeIn } from "../variants"
const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div className="md:w-2/5" 
              variants={fadeIn("right",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7 }}>
          <img src={img1} alt="" />
        </motion.div>
        {/* 2emd part */}
        <motion.div className="md:w-3/5 text-center md:text-start flex-col md:flex-row justify-between items-center gap-8 mb-24"
              variants={fadeIn("left",0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7 }}
              >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product <span className=" text-sicondary">for many years.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
          A good example of a paragraph contains a topic conclusion.
          There are many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>


      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div className="md:w-2/5"
              variants={fadeIn("left",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7 }}
              >
          <img src={img2} alt="" />
        </motion.div>
        {/* 2emd part */}
        <motion.div className="md:w-3/5 text-center md:text-start flex-col md:flex-row justify-between items-center gap-8"
              variants={fadeIn("right",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7 }}
              >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
          You can Practice at any <span className=" text-sicondary">time convinent for you.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
          A good example of a paragraph contains a topic conclusion.
          There are many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>
    </div>
  )
}

export default About