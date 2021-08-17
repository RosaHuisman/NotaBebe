import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

import Header from 'src/components/Header';
import logo from 'src/images/NotaBebe_logo.png';

import './styles.scss';

const Login = ({
  onSettingsSubmit,
  emailValue,
  onEmailChange,
  passwordValue,
  onPasswordChange,
  isError,
  isLogged,
}) => (
  <>
    {!isLogged ? (
      <header className="header">
        <h1 className="header-title">Lien parent-crèche</h1>
        <Link to="/">
          <img src={logo} className="header-logo" alt="Logo NotaBebe" />
        </Link>
      </header>
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
            <Dropdown.Item>Se déconnecter</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h1 className="header-title">Lien parent-crèche</h1>
        <Link to="/">
          <img src={logo} className="header-logo" alt="Logo NotaBebe" />
        </Link>
      </header>
    )}
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
        // value=""
        // onChange=""
          placeholder="Votre email"
        />
        <input
          className="settings__input"
          value={passwordValue}
          onChange={onPasswordChange}
        // value=""
        // onChange=""
          type="password"
          placeholder="Votre mot de passe"
        />
        <button
          className="settings__send"
          type="submit"
        >
          Se connecter
        </button>
        {isError && <p className="settings__error">Erreur : Mot de passe oublié ?</p>}
        {/* <p className="settings__forgot">Mot de passe oublié ?</p> */}
      </form>
    </div>
  </>
);

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
