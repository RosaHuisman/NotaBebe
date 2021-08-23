import React from 'react';
import { Link } from 'react-router-dom';

import HeaderAdmin from './HeaderAdmin';
import SearchBar from './SearchBar';

import './styles.scss';
import logoAdmin from '../../images/logo_admin.png';

const AdminHome = () => (
  <>
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

    <div className="adminDesktopHome">
      <div>
        <HeaderAdmin />
      </div>
      <div className="adminDesktopHome__adminTitle">
        Administration des accès
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  </>
);

export default AdminHome;
