import CategoriesList from '../../components/categories/CategoriesList';
import PortfolioCard from '../../components/portfoliocard/PortfolioCard';
import '../portfolio/PortfolioPg.css';
import { useEffect, useState } from 'react';
import axios from 'axios';



function PortfolioPg() {
  const [portfolioList, setPortfolioList] = useState([])
  // const portfolioURL = "https://shutterdragon.github.io/data.json";
  useEffect(()=>{

    async function fetchData() {

      const getPortfolio = await axios.get("http://localhost:5000/api/portfolio")
      setPortfolioList(getPortfolio.data);
    }
    fetchData();
   
    // axios(portfolioURL)
    // .then((response) => response.json())
    // .then((data) => setPortfolioList(data))
    // .catch((error) => console.log(error.message))
  }, [])
  return (
    <div className='page portfolioPg pt100' id="portfolio">
        <div className='pageTitleFullWidth'>
          <h2 className='pageTitle'>Portfolio</h2>
          <div className='portfolioMenu'>
            <CategoriesList />
          </div>
        </div>
        <div className='portfolioGrid'>
          { portfolioList.map((item) => {
            return (
              <PortfolioCard
                key={item._id} 
                title={ item.title }
                img={item.img}
                demolink={item.demolink}
                githublink={item.githublink}
               />
            )
          }) }
        </div>
    </div>
  )
}

export default PortfolioPg