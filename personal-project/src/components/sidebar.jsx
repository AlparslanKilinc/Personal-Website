import '../css/sidebar.css'
import '../css/reset.css'
import React, { useContext, useEffect,useState } from 'react'
import Avatar from '@mui/material/Avatar';
import profile from '../assets/profile_pic.jpg'
import resume from '../assets/Kilinc_Resume.pdf'

function Sidebar() {
    const style = {
        border:'2px solid #f0f3f6',
        width:'300px',
        height:'300px'
      };

    return (
      <div className='sidebar'>
        <Avatar sx={style} alt="Profile Pic" src={profile}/>
        <div className='personal-info'>
                <h1>Alparslan Kilinc</h1>
                <div className='text-info'>
                    <p>Software Engineer</p>
                    <p>Amazon SDE Intern</p>
                </div>
            <ul className='contact-info'>
                <li style={{display:'flex',gap:'5px',alignItems:'center'}}>
                    <i className="material-icons-outlined">location_on</i>
                    <p>New York City, New York</p>
                </li>
                <li style={{display:'flex',gap:'5px',alignItems:'center'}}>
                    <i className="fa-brands fa-linkedin" style={{marginLeft:'5px'}}></i>
                    <a href="https://www.linkedin.com/in/alparslan-kilinc-239358202/" target="_blank">LinkedIn</a>
                </li>
                <li style={{display:'flex',gap:'5px',alignItems:'center'}}>
                    <i className="material-icons-outlined">file_open</i>
                    <a href={resume} target="_blank">Resume</a>
                </li>
                <li style={{display:'flex',gap:'5px',alignItems:'center'}}>
                    <i className="material-icons-outlined">email</i>
                    <a href="mailto: kilincalparslan70@gmail.com" target="_blank">Mail</a>
                </li>
                <li style={{display:'flex',gap:'5px',alignItems:'center'}}>
                    <i className="fa-brands fa-github"></i>
                    <a href="https://github.com/AlparslanKilinc" target="_blank">Github</a>
                </li>
            </ul>
        </div>
      </div>
    )
  }
  
  export default Sidebar
