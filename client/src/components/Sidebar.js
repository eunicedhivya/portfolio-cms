import React, { useState, useEffect } from 'react';
import MainMenu from './MainMenu';

function Sidebar({ sticky }) {

  return (
    <nav className={sticky? "site-nav sticky" : "site-nav" } id="site-nav">
                <div className="site-branding">
                    ED
                </div>
                <MainMenu />

            </nav>
  )
}

export default Sidebar