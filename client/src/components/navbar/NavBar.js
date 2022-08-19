import './NavBar.css';
import MainMenu from '../MainMenu';
import SiteBrand from '../SiteBrand';

function NavBar() {
  return (
    <nav className='mainNav'>
        <div className='container'>
          <SiteBrand />
          <MainMenu />
        </div>
    </nav>
  )
}

export default NavBar