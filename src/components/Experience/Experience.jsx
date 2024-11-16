import React, { useContext } from 'react'
import './Experience.css'
import { themeContext } from '../../Context';
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='Experience'>
    <div className="achievement">
      {/* darkMode */}
      <div className="circle" style={{color: darkMode?'var(--orange)':''}}>0+</div>
      <span  style={{color: darkMode?'white':''}}>years </span>
      <span>Experience</span>
    </div>
    <div className="achievement">
      <div className="circle" style={{color: darkMode?'var(--orange)':''}}>4+</div>
      <span  style={{color: darkMode?'white':''}}>completed </span>
      <span>Projects</span>
    </div>
    <div className="achievement">
      <div className="circle" style={{color: darkMode?'var(--orange)':''}}>0</div>
      <span  style={{color: darkMode?'white':''}}>company </span>
      <span>worked</span>
    </div>
  </div>
  )
}

export default Experience
