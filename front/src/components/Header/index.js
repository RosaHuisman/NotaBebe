import React from 'react';
import { Link } from 'react-router-dom';


import logo from 'src/images/NotaBebe_logo.png';

import './styles.scss';

const Header = () => (
  <header className="header">
    
    {/* <isLogged && Menu /> */}
 
    <h1 className="header-title">Lien parent-crèche</h1>
    
    <Link to="/">
      <img src={logo} className="header-logo" alt="Logo NotaBebe" />
    </Link>

  </header>
);

export default Header;
