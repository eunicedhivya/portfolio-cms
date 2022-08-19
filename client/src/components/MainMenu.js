import MenuItem from './MenuItem';

function MainMenu() {
  return (
    <div className='nav__list'>
      <MenuItem 
      iconclass="icon-home hover-icon" 
      icontext="Home" 
      anchorlink="/"  />
      <MenuItem 
      iconclass="icon-user hover-icon" 
      icontext="About" 
      anchorlink="#about"  />
      <MenuItem 
      iconclass="icon-briefcase hover-icon" 
      icontext="Portfolio" 
      anchorlink="#portfolio"  />
      <MenuItem 
      iconclass="icon-envelope hover-icon" 
      icontext="Contact" 
      anchorlink="#contact"  />
    </div>
  )
}

export default MainMenu


