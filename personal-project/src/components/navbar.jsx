import '../css/navbar.css'
import '../css/reset.css'
import React, {useState } from 'react'
import Projects from '../components/projects.jsx';
import Education from '../components/education.jsx';
import Experience from '../components/experience.jsx';
import Awards from  '../components/awards.jsx';

function Navbar() {
  const [Select, setSelect] = useState("Projects");
  const [Content,setContent]= useState(<Projects/>);

  let handleButton = (input)=>{
      switch (input){
          case 'Projects':
            setSelect("Projects");
            setContent(<Projects/>);
            break;
          case 'Education':
            setSelect("Education");
            setContent(<Education/>);
            break;
          case 'Experience':
            setSelect("Experience");
            setContent(<Experience/>);
            break;
          case 'Awards':
            setSelect("Awards");
            setContent(<Awards/>);
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
          onClick={()=>{handleButton("Experience")}} 
          className='nav-button'
          style={{borderBottom: Select==="Experience" ? '3px solid #ff967d': 'none'}}>
            <i className="material-icons-outlined">badge</i>
            Experience
          </button>

          <button
          onClick={()=>{handleButton("Education")}} 
          className='nav-button'
          style={{borderBottom: Select==="Education" ? '3px solid #ff967d': 'none'}}>
            <i className="material-icons-outlined">school</i>
            Education
          </button>

          <button 
          onClick={()=>{handleButton("Awards")}} 
          className='nav-button'
          style={{borderBottom: Select==="Awards" ? '3px solid #ff967d': 'none'}}>
            <i className="material-icons-outlined">emoji_events</i>
            Awards
          </button>
        </li>
        <div className='content'>
        {Select === "Projects" ? 
            <div className='intro'>
                <p style={{fontSize:'12px'}}>AlparslanKilinc/ README.md</p>
                <p  className="intro-content" style={{fontSize:'16px'}}>
                  Hi there! I'm Alparslan Kilinc, a computer science student passionate about software development. 
                  I started falling in love with software development when I discovered I could make my ideas come to life. 
                  The idea of creating applications that can touch many people around the world is what makes me pursue this career.
                  I am always eager to collaborate with others and learn from their expertise.
                  Please feel free to reach out to me if you have any opportunities or would like to connect!
                </p>
            </div>
              : "" }
            {Content}
        </div>
      </div>
    )
  }
  
  export default Navbar