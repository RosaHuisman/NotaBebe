import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import Header from 'src/components/Header';

import './styles.scss';

const Login = ({
  onSettingsSubmit,
  emailValue,
  onEmailChange,
  passwordValue,
  onPasswordChange,
  isError,
  isLogged,
}) => {
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push('/');
  }
  return (
    <>
      {!isLogged ? (
        <>
          <div className="loginForm">
            <div className="loginForm__title">
              Connexion
            </div>
            <form
              className="loginForm__content"
              onSubmit={onSettingsSubmit}
            >
              <input
                className="settings__input"
                value={emailValue}
                onChange={onEmailChange}
                placeholder="Votre email"
              />
              <input
                className="settings__input"
                value={passwordValue}
                onChange={onPasswordChange}
                type="password"
                placeholder="Votre mot de passe"
              />
              <button
                className="settings__send"
                type="submit"
              >
                Se connecter
              </button>
              {isError && <p className="settings__forgot">Erreur : Mot de passe oublié ?</p>}
            </form>
          </div>
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
              <Dropdown.Item onCLick={logOut}>Se déconnecter</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Header />
        </header>
      )}
    </>
  );
};

Login.propTypes = {
  onSettingsSubmit: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  passwordValue: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Login;
