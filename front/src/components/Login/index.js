import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Login = ({
  onSettingsSubmit,
  emailValue,
  onEmailChange,
  passwordValue,
  onPasswordChange,
  isError,
}) => (
  <div className="loginForm">
    <div className="loginForm__title">
      Connexion
    </div>
    <form
      className="loginForm__content"
      // onSubmit={onSettingsSubmit}
      onSubmit=""
    >
      <input
        className="settings__input"
        // value={emailValue}
        // onChange={onEmailChange}
        value=""
        onChange=""
        placeholder="Votre email"
      />
      <input
        className="settings__input"
        // value={passwordValue}
        // onChange={onPasswordChange}
        value=""
        onChange=""
        type="password"
        placeholder="Votre mot de passe"
      />
      <button
        className="settings__send"
        type="submit"
      >
        Se connecter
      </button>
      {/* {isError && <p className="settings__error">Erreur : Mot de passe oublié ?</p>} */}
      <p className="settings__forgot">Mot de passe oublié ?</p>
    </form>
  </div>
);

Login.propTypes = {
  // onSettingsSubmit: PropTypes.func.isRequired,
  // emailValue: PropTypes.string.isRequired,
  // onEmailChange: PropTypes.func.isRequired,
  // passwordValue: PropTypes.string.isRequired,
  // onPasswordChange: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default Login;
