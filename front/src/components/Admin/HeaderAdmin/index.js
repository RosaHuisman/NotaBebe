import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const HeaderAdmin = () => (
  <header className="menu">
    <Link
      className="menu__link"
      activeClassName="menu__link__selected"
      to="/admin"
    >
      Accueil
    </Link>
    <Link
      className="menu__link"
      activeClassName="menu__link__selected"
      to="/news"
    >
      Actualités
    </Link>
    <Link
      className="menu__link"
      activeClassName="menu__link__selected"
      to="/contact"
    >
      Contact
    </Link>
  </header>
);

export default HeaderAdmin;
