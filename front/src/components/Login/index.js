import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import './styles.scss';

const Login = ({
  // onSettingsSubmit,
  email,
  password,
  onEmailChange,
  onPasswordChange,
  isError,
  handleLogin,
}) => {
  const history = useHistory();

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
  // onSettingsSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
