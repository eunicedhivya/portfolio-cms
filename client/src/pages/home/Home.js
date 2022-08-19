import React from 'react';
import MainMenu from '../../components/MainMenu';
import './home.css';
import ScrollDown from '../../components/ScrollDown';

function Home({ sticky }) {
  return (
    <section className="" id="home">
      <div className="home__content">
        <h1>Eunice Dhivya</h1>
        <p>I’m a fullstack developer specializing in designing and developing dashboards and interactive stories.</p>
        <nav className={sticky? "home-nav sticky" : "home-nav" } id="home-nav">
            <MainMenu />
        </nav>
        <hr className='hr'/>
        <button className='btn-lg'> Resume <span className='icon-arrow-down-circle'></span></button>
      </div>
      <ScrollDown />
  </section>
  )
}

export default Home