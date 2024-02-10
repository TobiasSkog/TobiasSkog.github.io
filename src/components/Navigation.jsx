import '../css/navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className='main-menu'>
      <div className='left-menu'>
        <ul className='nav-item'>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/about">About</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/cv">CV</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <div className='right-menu'>
        <ul className='nav-item'>
          {/* <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/guidelines">Web Guidelines</NavLink></li> */}
        </ul>
      </div>
    </div>
  );
}


// import '../css/navigation.css';

// function Navigation() {
//   return (
//     <header>
//       <nav className="main-menu">
//         <div className="left-menu">
//           <a href="/index.html"> <p className="nav-text-active">Home</p></a>
//           <a href="/webbdesign/about/about.html"> <p className="nav-text">About</p></a>
//           <a href="/webbdesign/portfolio/portfolio.html"> <p className="nav-text">Portfolio</p></a>
//           <a href="/webbdesign/cv/cv.html"><p className="nav-text">CV</p></a>
//           <a href="/webbdesign/contact/contact.html"> <p className="nav-text">Contact</p></a>
//         </div>
//         <div className="right-menu">
//           <a href="https://www.digg.se/webbriktlinjer/alla-webbriktlinjer" target="none"> <p className="nav-text">Webb Guidelines</p></a>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navigation;