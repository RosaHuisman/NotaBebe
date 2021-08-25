import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';

import './styles.scss';
import logo from 'src/images/NotaBebe_logo.png';

const Header = ({ logged, handleLogout, loggedMessage }) => {
  const history = useHistory();

  const getToken = localStorage.getItem('MyToken');
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa', getToken);

  const LOGOUT = (e) => {
    localStorage.removeItem('MyToken');
    e.preventDefault();
    handleLogout();
    if (getToken) {
      history.push('/homepage2');
    }
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
        <header className="header">
          <Dropdown
            icon="content"
            floating
            button
            className="icon iconBurger"
          >
            {/* <Dropdown.Menu>
              <Dropdown.Item>{loggedMessage}</Dropdown.Item>
              <Dropdown.Item onClick={handleMenu2}>MENU2</Dropdown.Item>
              <Dropdown.Item onClick={handleMenu3}>MENU3</Dropdown.Item>
              <Dropdown.Item onClick={LOGOUT}>Se déconnecter</Dropdown.Item>
            </Dropdown.Menu> */}
            <Dropdown.Menu>
              <Dropdown.Item>{loggedMessage}</Dropdown.Item>
              <Dropdown.Item>
                <Link to="" onClick={handleMenu2}>MENU1</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="" onClick={handleMenu3}>MENU2</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="" onClick={handleMenu2}>MENU3</Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={LOGOUT}>Se déconnecter</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <h1 className="header-title">NotaBebe</h1>
          <Link to="/">
            <img src={logo} className="header-logo" alt="Logo NotaBebe" />
          </Link>
        </header>
      )}
    </>
  );
};

Header.propTypes = {
  logged: PropTypes.bool,
  // handleLogout: PropTypes.func.isRequired,
  loggedMessage: PropTypes.string,
};

Header.defaultProps = {
  logged: false,
  loggedMessage: 'Connecté',
};

export default Header;
