import React from 'react';

import './styles.scss';
import logo from 'src/images/NotaBebe_logo.png';

const Error = () => (
  <div className="error-page">
    Bonjour je suis sur la page erreur de test
    <img src={logo} className="header-logo" alt="Logo NotaBebe" />
  </div>
);

export default Error;
