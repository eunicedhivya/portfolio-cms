import { NavLink } from 'react-router-dom';

function MenuItem({ iconclass, icontext, anchorlink }) {
    return (
          <NavLink to={anchorlink} className="nav__link">
            <span className={iconclass}></span>
            <span className="icon-text">{icontext}</span>
          </NavLink>
    )
}

export default MenuItem;