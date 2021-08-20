import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import './styles.scss';
import logo from 'src/images/NotaBebe_logo.png';

const Header = ({ isLogged, handleLogout }) => (
  <>
    {!isLogged ? (
      <>
        <header className="header">
          <h1 className="header-title">Lien parent-crèche</h1>
          <Link to="/">
            <img src={logo} className="header-logo" alt="Logo NotaBebe" />
          </Link>
        </header>
      </>
    ) : (
      <header className="header">
        <Dropdown
          icon="content"
          floating
          button
          className="icon iconBurger"
        >
          <Dropdown.Menu>
            <Dropdown.Item>MENU1</Dropdown.Item>
            <Dropdown.Item>MENU2</Dropdown.Item>
            <Dropdown.Item>MENU2</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Se déconnecter</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h1 className="header-title">Lien parent-crèche</h1>
        <Link to="/">
          <img src={logo} className="header-logo" alt="Logo NotaBebe" />
        </Link>
      </header>
    )}
  </>
);

Header.propTypes = {
  //isLogged: PropTypes.bool.isRequired,
  //handleLogout: PropTypes.func.isRequired,
};

export default Header;
