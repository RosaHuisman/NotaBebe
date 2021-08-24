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
    <div>
      <Link to="/profile/parent/1">PARENT 1</Link>
      <Link to="/profile/parent/2">PARENT 2</Link>
      <Link to="/profile/parent/3">PARENT 3</Link>

      <Link to="/profile/parent/1/child/1">PARENT 1: enfant 1</Link>
      <Link to="/profile/parent/1/child/2">PARENT 1: enfant 2</Link>
      <Link to="/profile/parent/2/child/3">PARENT 2: enfant 3</Link>
      <Link to="/profile/parent/3/child/4">PARENT 3: enfant 4</Link>

      <Link to="/homepage1">HOME 1</Link>
      <Link to="/homepage2">HOME 2</Link>
      <Link to="/homepage3">HOME 3</Link>
    </div>

  </>
);

export default AdminHome;
