import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import Header from 'src/components/Header';

import './styles.scss';

const Login = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  isError,
  handleLogin,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="loginForm">
      <div className="loginForm__title">
        Connexion
      </div>
      <form
        className="loginForm__content"
        onSubmit={handleSubmit}
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
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
