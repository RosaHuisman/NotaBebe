import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import Header from 'src/components/Header';

import './styles.scss';

const Login = ({
  onSettingsSubmit,
  email,
  onEmailChange,
  password,
  onPasswordChange,
  handleLogout,
  isError,
  isLogged,
}) => (
  <>
    {!isLogged ? (
      <>
        <header className="header">
          <Header />
        </header>
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
              value={email}
              onChange={onEmailChange}
              placeholder="Votre email"
              type="email"
              required
            />
            <input
              className="settings__input"
              value={password}
              onChange={onPasswordChange}
              type="password"
              placeholder="Votre mot de passe"
              required
            />
            <button
              className="settings__send"
              type="submit"
            >
              Se connecter
            </button>
            {isError && <p className="settings__forgot">Erreur Login/Mot de passe</p>}
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
            <Dropdown.Item onCLick={handleLogout}>Se déconnecter</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Header />
      </header>
    )}
  </>
);

Login.propTypes = {
  onSettingsSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Login;
