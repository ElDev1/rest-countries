import React from 'react';
import '../styles/nav.css';

const handleDarkMode = () => {
  const body = document.body;
  const btnSwitch = document.querySelector('#switch');

  body.classList.toggle('dark');
  console.log(btnSwitch)
  btnSwitch.classList.toggle('active');
}

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid d-flex d-flex">
        <h1 className="navbar-brand">Where in world</h1>
          <button className='switch' id='switch' onClick={handleDarkMode}>
            <span><i className="fa-solid fa-sun"></i></span>
            <span><i className="fa-solid fa-moon"></i></span>
          </button>
      </div>
    </nav>
  )
}

export default Nav