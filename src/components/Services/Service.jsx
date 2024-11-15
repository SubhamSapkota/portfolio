import React, { useContext } from 'react'
import './Services.css'
import Card from '../Card/Card'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './Subham CV.pdf'
import { themeContext } from '../../Context'
import { motion } from "framer-motion";
const Service = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

   // transition
   const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
          <br />
          hhahah
        </span>

      {/* Button for downloading Resume */}
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
>
          <Card
          emoji={HeartEmoji}
          heading='Design'
          detail='Figma, Sketch, Photoshop'
          />
        </motion.div>

        
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}>
          <Card
          emoji={Glasses}
          heading='Developer'
          detail='React, Express, Node, MongoDB'
          />
        </motion.div>

        {/* 3rd */} 
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}>
          <Card
          emoji={Humble}
          heading='UI/UX'
          detail='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quia.'
          />
        </motion.div>

        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  )
}

export default Service
