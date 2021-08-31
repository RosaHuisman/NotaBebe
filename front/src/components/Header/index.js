import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { Link, useHistory, Redirect } from 'react-router-dom';

import './styles.scss';
import logo from 'src/images/NotaBebe_logo.png';

const Header = ({
  logged, handleLogout, loggedMessage, successMessage, user,
}) => {
  const history = useHistory();

  const getToken = localStorage.getItem('MyToken');
  // console.log('JE SUIS DANS LE COMPONENT HEADER POUR CHECK LE TOKEN', getToken);

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
            {/* <>
              {user.roleId === 1
                ? (
                  <Dropdown
                    icon="content"
                    floating
                    button
                    className="icon iconBurger"
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item>{loggedMessage}</Dropdown.Item>
                      <Dropdown.Item>
                        <Link to={`/profile/parent/${user.userId}`}>Mon profil</Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/actualites" onClick={handleMenu3}>Actualités</Link>
                      </Dropdown.Item>
                      <Dropdown.Item onClick={LOGOUT}>Se déconnecter</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )

                : user.roleId === 2
                  ? (
                    <Dropdown
                      icon="content"
                      floating
                      button
                      className="icon iconBurger"
                    >
                      <Dropdown.Menu>
                        <Dropdown.Item>{loggedMessage}</Dropdown.Item>
                        <Dropdown.Item>
                          <Link to={`/profile/staff/${user.userId}`}>Mon profil</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/actualites">Actualités</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="">Listes des commentaires</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="">Editer un récap</Link>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={LOGOUT}>Se déconnecter</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )
                  : (
                    <Dropdown
                      icon="content"
                      floating
                      button
                      className="icon iconBurger"
                    >
                      <Dropdown.Menu>
                        <Dropdown.Item>{loggedMessage}</Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/actualites">Actualités</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/admin">Listes des utilisateurs</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/admin/adduser">Créer un utilisateur</Link>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={LOGOUT}>Se déconnecter</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
            </> */}
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
