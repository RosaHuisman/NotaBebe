import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';

import logo from 'src/images/NotaBebe_logo.png';

const HeaderParent = ({
  handleLogout, loggedMessage, userId,
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
            <Link to={`/profile/parent/${userId}`}>Mon profil</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/actualites">Actualités</Link>
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

HeaderParent.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  loggedMessage: PropTypes.string,
};

HeaderParent.defaultProps = {
  loggedMessage: 'Connecté',
};

export default HeaderParent;
