import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Footer = () => {
  return (
    <div className="footer">
      <a href="#" className="mention__link">Mentions légales</a>
      <br />
      <Link to={'/team'} className="devteam">Développé par NotaBebe-Tardis</Link>
    </div>
  );
}

export default Footer;
