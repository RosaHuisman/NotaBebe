import React from 'react';
import { Link } from 'react-router-dom';

const HeaderAdmin = () => (
  <header className="menu">
    <Link
      className="menu__link"
      activeclassname="menu__link__selected"
      to="/admin"
    >
      Accueil
    </Link>
    <Link
      className="menu__link"
      activeclassname="menu__link__selected"
      to="/actualites"
    >
      Actualités
    </Link>
    <Link
      className="menu__link"
      activeclassname="menu__link__selected"
      to="/contact"
    >
      Contact
    </Link>
  </header>
);

export default HeaderAdmin;
