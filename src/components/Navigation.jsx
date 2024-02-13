import './Navigation.css';
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