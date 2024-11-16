import React, { useContext } from 'react'
import './Works.css'
// import facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context';
import { motion } from "framer-motion";
const Works = () => {
   // context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
      {/* left side */}
      <div className="awesome">
         {/* dark Mode */}
         <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
        <span>Brands & Clients</span>
        <span>Lorem ipsum dolor 
          <br />sit, amet consectetur 
          <br /> adipisicing elit. Exercitationem
          <br />
          hhahah
        </span>

      {/* Button for downloading Resume */}
        
        <button className="button s-button">Hire Me!</button>
        
        
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }} className="w-mainCircle">
          <div className="w-secCircle">
            <img src="https://www.pngmart.com/files/13/Amazon-Logo-PNG.png" alt="" />
          </div>
          <div className="w-secCircle">
            <img src="https://www.pngmart.com/files/13/Amazon-Logo-PNG.png" alt="" />
          </div>
          <div className="w-secCircle">
            <img src="https://www.pngmart.com/files/13/Amazon-Logo-PNG.png" alt="" />
          </div>
          <div className="w-secCircle">
            <img src="https://www.pngmart.com/files/13/Amazon-Logo-PNG.png" alt="" />
          </div>
          <div className="w-secCircle">
            <img src="" alt="" />
          </div>
        </motion.div>
        {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
          <div className=" w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works
