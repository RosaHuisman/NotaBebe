import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { Link, useHistory, Redirect } from 'react-router-dom';

import './styles.scss';
import logo from 'src/images/NotaBebe_logo.png';

const Header = ({
  logged, handleLogout, loggedMessage, successMessage,
}) => {
  const history = useHistory();

  const getToken = localStorage.getItem('MyToken');
  //console.log('JE SUIS DANS LE COMPONENT HEADER POUR CHECK LE TOKEN', getToken);

  const LOGOUT = (e) => {
    localStorage.removeItem('MyToken');
    e.preventDefault();
    // handleLogout();
    // if (!getToken) {
      history.push('/');
    // }
  };

  const handleMenu2 = (e) => {
    e.preventDefault();
    if (getToken) {
      history.push('/homepage2');
    }
  };
  const handleMenu3 = (e) => {
    e.preventDefault();
    if (getToken) {
      history.push('/homepage3');
    }
  };
  return (
    <>
      {!getToken ? (
        <>
          <header className="header">
            <h1 className="header-title">NotaBebe</h1>
            <Link to="/">
              <img src={logo} className="header-logo" alt="Logo NotaBebe" />
            </Link>
          </header>
        </>
      ) : (
        <>
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
                  <Link to="" onClick={handleMenu2}>Mon profil</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="" onClick={handleMenu3}> Commentaires parents</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="" onClick={handleMenu2}>Editer un récap</Link>
                </Dropdown.Item>
                <Dropdown.Item onClick={LOGOUT}>Se déconnecter</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <h1 className="header-title">NotaBebe</h1>
            <Link to="/">
              <img src={logo} className="header-logo" alt="Logo NotaBebe" />
            </Link>
          </header>
        </>
      )}
    </>
  );
};

Header.propTypes = {
  logged: PropTypes.bool,
  // handleLogout: PropTypes.func.isRequired,
  loggedMessage: PropTypes.string,
  successMessage: PropTypes.bool,
};

Header.defaultProps = {
  logged: false,
  loggedMessage: 'Connecté',
  successMessage: false,
};

export default Header;
