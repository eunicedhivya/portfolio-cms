import './PortfolioDetailPg.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PortfolioDetailPg() {
  let { url } = useParams();
  const [portfolioItem, setPortfolioItem] = useState({});

  const { title, description } = portfolioItem;

  const portfolioURL = "https://shutterdragon.github.io/data.json";
  useEffect(()=>{
    fetch(portfolioURL)
    .then((response) => response.json())
    .then((data) => {
      const fd = data.filter(function(item){
        return item.url === url;
      });
      setPortfolioItem(fd[0])
    })
    .catch((error) => console.log(error.message))
  }, [])

  return (
    <div className='page portfolioDetail'>
      <img src="https://placehold.jp/300x400.png" alt="" />
      <div className='portfolioContent'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="portfolioLinks">
          <Link to="/">Github</Link>
          <Link to="/">Demo</Link>
        </div>
      </div>
    </div>
  )
}

export default PortfolioDetailPg