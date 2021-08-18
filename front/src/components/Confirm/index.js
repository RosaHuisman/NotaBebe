import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import sendValidate from 'src/images/validate.png';

const Confirm = () => (
  <div className="check-page">
    <img src={sendValidate} className="check-page__logo" alt="validation" />
    <div className="check-page__txt">
      <p className="check-page__txt__title">Envoyé !</p>
      <em>Vérifier votre boite de réception.</em>
    </div>
    <Link to="/">
      <div className="button-settings-back">
        Retour à l'accueil
      </div>
    </Link>
  </div>
);

export default Confirm;
