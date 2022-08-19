import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';

function Layout({ children }) {
  return (
    <>
        {/* <NavBar /> */}
        <div className='container'>
          { children }
        </div>
        {/* <Footer /> */}
    </>
  )
}

export default Layout