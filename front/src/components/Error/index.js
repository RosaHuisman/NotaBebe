import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import error404 from 'src/images/Error404.png';

const Error = () => (
  <div className="error-page">
    <img src={error404} className="error404" alt="error 404" />
    <div className="error-txt">
      <p className="error-txt__title">Oups !</p>
      <em>Une erreur vient de se produire</em>
    </div>
    <Link to="/">
      <div className="button-settings-back">
        Retour
      </div>
    </Link>
  </div>
);

export default Error;
