import React from 'react';
import profile from '../assets/eu.png';

function Header () {
  return (
    <header>
      <nav>
        <img src="https://i.imgur.com/KDIDiSE.png" />
        <div>
          <span>Perfil</span>
          <img className="profile" src={profile} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
