import React from 'react';
import '../styles/nav.css';

const Nav = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid d-flex d-flex">
        <h1 class="navbar-brand">Where in world</h1>
          <button className='switch' id='switch'>
            <span><i class="fa-solid fa-sun"></i></span>
            <span><i class="fa-solid fa-moon"></i></span>
          </button>
      </div>
    </nav>
  )
}

export default Nav