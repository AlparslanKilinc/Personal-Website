import '../css/navbar.css'
import React, { useContext, useEffect,useState } from 'react'

function Navbar() {
  const [Select, setSelect] = useState("Projects");

  let handleButton = (input)=>{
      switch (input){
          case 'Projects':
            setSelect("Projects");
            break;
          case 'Education':
            setSelect("Education");
            break;
          case 'About Me':
            setSelect("About Me");
            break;
          case 'Awards':
            setSelect("Awards");
            break;
          default:
            console.log("Default");
      }
  }
    return (
      <div className='navbar'>
        <li className='nav-list'>
          <button 
          onClick={()=>{handleButton("Projects")}} 
          className='nav-button'
          style={{borderBottom: Select==="Projects" ? '3px solid #ff967d': 'none'}}>
            <i className="material-icons-outlined">book</i>
            Projects
          </button>

          <button
          onClick={()=>{handleButton("Education")}} 
          className='nav-button'
          style={{borderBottom: Select==="Education" ? '3px solid #ff967d': 'none'}}>
            <i className="material-icons-outlined">school</i>
            Education
          </button>

          <button 
          onClick={()=>{handleButton("About Me")}} 
          className='nav-button'
          style={{borderBottom: Select==="About Me" ? '3px solid #ff967d': 'none'}}>
            <i className="material-icons-outlined">person</i>
            About Me
          </button>

          <button 
          onClick={()=>{handleButton("Awards")}} 
          className='nav-button'
          style={{borderBottom: Select==="Awards" ? '3px solid #ff967d': 'none'}}>
            <i className="material-icons-outlined">emoji_events</i>
            Awards
          </button>
        </li>
      </div>
    )
  }
  
  export default Navbar