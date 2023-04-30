import './App.css'
import './css/reset.css'
import  Navbar from './components/navbar.jsx'
import Sidebar from './components/sidebar.jsx'
import Divider from '@mui/material/Divider';


function App() {
  const style = {
    position:'absolute',
    top:'90px',
    width:'100vw',
    bgcolor: 'white',
  };

  return (
    <>
      <Sidebar/>
      <Navbar/>
      <Divider sx={style}/>
    </>
  )
}

export default App
