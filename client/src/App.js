import './App.css';
import { Switch, Route} from "react-router-dom";
import { useContext } from 'react';
import AdminBar from './components/adminbar/AdminBar';
import Home from './pages/home/Home';
import PortfolioPg from './pages/portfolio/PortfolioPg';
import PortfolioDetailPg from './pages/detail/PortfolioDetailPg';
import AboutPg from './pages/about/AboutPg';
import ContactPg from './pages/contact/ContactPg';
import Layout from './layout/Layout';
import AddPortfolio from './admin/addportfolio/AddPortfolio';
import LoginPg from './admin/login/LoginPg';
import RegisterPg from './admin/register/RegisterPg';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import AuthContext from "./context/AuthContextProvider";
import NotFound from './pages/notfound/NotFound';

function App() {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  return (
    <div className="App">
      <ToastContainer />
      <AdminBar />
     <Switch>
        <Route path='/' exact>
          <Home />
          <AboutPg />
          <PortfolioPg />
        </Route>
        <Route path='/about' exact>
          <Layout>
            <AboutPg />
          </Layout>
        </Route>
        <Route path='/contact' exact>
          <ContactPg />
        </Route>
        <Route path='/portfolio/:url'>
          <PortfolioDetailPg />
        </Route>
        <Route path='/category/:name'>
          <PortfolioDetailPg />
        </Route>
        <Route path='/login'>
          <Layout>
            <LoginPg />
          </Layout>
        </Route>
        {
          loggedIn && 
          (
            <>
            <Route path='/register'>
              <Layout>
                <RegisterPg />
              </Layout>
            </Route>
            <Route path='/dashboard'>
              <p>Dashboard</p>
            </Route>
            <Route path='/add-portfolio'>
              <AddPortfolio />
            </Route>
            <Route path='/add-category'>
              <p>Add Portfolio Post</p>
            </Route>
            </>
          )
        }
        
        <Route path='**'>
          <NotFound />
        </Route>
     </Switch>
    </div>
  );
}

export default App;
