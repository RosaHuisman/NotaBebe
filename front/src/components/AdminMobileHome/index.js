import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import logoAdmin from 'src/images/logo_admin.png';

const AdminMobileHome = () => (
  <div className="adminMobileHome">
    <img src={logoAdmin} className="adminMobileHome__logo" alt="admin" />
    <div className="adminMobileHome__txt">
      Pour une meilleur expérience, veuillez vous connecter à partir d'un ordinateur.
    </div>
    <Link to="/">
      <div className="button-settings-back">
        Retour à l'accueil
      </div>
    </Link>
  </div>
);

export default AdminMobileHome;
