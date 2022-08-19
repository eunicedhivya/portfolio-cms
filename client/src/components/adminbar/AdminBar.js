import './AdminBar.css';
import MenuItem from '../MenuItem';
import { Link } from 'react-router-dom';
import SiteBrand from '../SiteBrand';
import AuthContext from "../../context/AuthContextProvider";
import { useContext } from 'react';
import axios from 'axios';

function AdminBar() {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  return (
    <div className='adminbar' style={ loggedIn ? { display:'flex'} : { display:'none'}}>
      <SiteBrand />
      <div className='adminmenu'>
        <MenuItem 
        iconclass="icon-list hover-icon" 
        icontext="Dashboard" 
        anchorlink="/dashboard"  />
        <MenuItem 
        iconclass="icon-plus hover-icon" 
        icontext="Add Portfolio" 
        anchorlink="/add-portfolio"  />
        <MenuItem 
        iconclass="icon-plus hover-icon" 
        icontext="Add Category" 
        anchorlink="/dashboard"  />
      </div>
      <div className='accountMenu'>
        <Link to="/" onClick={async(e)=>{
          e.preventDefault();
          const url = "http://localhost:5000/api/logout";
          const getPortfolio = await axios.get("http://localhost:5000/api/portfolio");
          document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          setLoggedIn(false);
        }} >
          <img src="https://placehold.jp/30x30.png" />
          Logout
        </Link>
      </div>
    </div>
  )
}

export default AdminBar