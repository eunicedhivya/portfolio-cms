import { Link } from 'react-router-dom';
import './PortfolioCard.css';

function PortfolioCard({ title, img, demolink, githublink}) {

  const s3URL = "https://myportfoliopics.s3.amazonaws.com/portfolio/"
  console.log("githublink", githublink);
  return (
    <div className='portfolioCard box-shadow'>
      <img src={s3URL+img+".jpg"} alt="" />
      <div className="portfolioCard__text">
        <h3>{title}</h3>
        <div className='portfolioCard__links'>
          {demolink && <Link to={"//"+demolink} target="_blank"><span className="icon-link"></span> Demo</Link>}

          
          {(githublink !== "#") && (
            <Link to={"//"+githublink} target="_blank"><span className="icon-social-github"></span> Github</Link>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard