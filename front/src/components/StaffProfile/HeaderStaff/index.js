import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';

import logo from 'src/images/NotaBebe_logo.png';

const HeaderStaff = ({
  handleLogout, loggedMessage, userId, staff
}) => {
  const history = useHistory();

  const LOGOUT = () => {
    // localStorage.removeItem('MyToken');
    // e.preventDefault();
    handleLogout();
    // if (!getToken) {
    history.push('/');
    // }
  };

  return (
    <header className="header">
      <Dropdown
        icon="content"
        floating
        button
        className="icon iconBurger"
      >
        <Dropdown.Menu>
          <Dropdown.Item>{loggedMessage}</Dropdown.Item>
          <Dropdown.Item>
            <Link to={`/profile/staff/${userId}`}>Mon profil</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/actualites">Actualités</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={`/profile/staff/:id/children`}>Liste des enfants</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={`/profile/staff/:id/comments`}>Listes des commentaires</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={`/profile/staff/:id/recaps`}>Liste des récaps</Link>
          </Dropdown.Item>
          <Dropdown.Item onClick={LOGOUT}>Se déconnecter</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <h1 className="header-title">NotaBebe</h1>
      <Link to="/">
        <img src={logo} className="header-logo" alt="Logo NotaBebe" />
      </Link>
    </header>
  );
};

HeaderStaff.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  loggedMessage: PropTypes.string,
};

HeaderStaff.defaultProps = {
  loggedMessage: 'Connecté',
};

export default HeaderStaff;
