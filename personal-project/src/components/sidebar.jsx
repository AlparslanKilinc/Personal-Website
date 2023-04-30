import '../css/sidebar.css'
import React, { useContext, useEffect,useState } from 'react'
import Avatar from '@mui/material/Avatar';

function Sidebar() {

    return (
      <div className='sidebar'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p>SideBar</p>
      </div>
    )
  }
  
  export default Sidebar
