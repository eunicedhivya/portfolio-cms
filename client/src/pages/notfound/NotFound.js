import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='verticalAlignCenter'>
        <div className='page404'>
            <h2>404</h2>
            <div className="msg">
                <p>We couldnt find the page pls go to Let's go <Link to="/"><span className='icon-home'></span> home</Link> instead.</p>
            </div>
        </div>
    </div>
  )
}

export default NotFound