import React from 'react';

import './Navbar.css'

const Navbar = () => {
  return <div>
   <header>
            <div className="navbar">
                <div className="logo">
                    <h1><a href="/">freshgrocery</a></h1>
                    <span>We provide you fresh and organic products direct form the farm</span>
                </div>

                <div className="links">
                    <nav>
                         <ul>
                            <li><a href="/login">login</a></li>
                            <li><a href="/register">signup</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="underline"></div>
            <div className="categories-links">
                <ul>
                   <li><a href="/vegetables">Vegetables</a></li>
                   <li><a href="/cereals">Cereals</a></li>
                   <li><a href="/fruits">Fruits</a></li>
                   <li><a href="/legumes">Legumes</a></li>
                </ul>
            </div>
        </header>

  </div>;
}

export default Navbar;
