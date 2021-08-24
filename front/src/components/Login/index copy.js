import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Field from 'src/components/Field';

import './styles.scss';

const Login = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  handleLogin,
  isError,
}) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    history.push('/homepage');
  };

  return (
    <>
      <div className="loginForm">
        <div className="loginForm__title">
          Connexion
        </div>
        {isError
          && (
          <div className="loginForm__errorMsg">
            <p className="loginForm__errorMsg__error">
              Erreur de connexion
            </p>
            <p className="loginForm__errorMsg__errorBis">
              Veuillez vérifier vos identifiants de connexion
            </p>
          </div>
          )}
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
          <Link to="/forgot">
            <p className="settings__forgottxt">
              Mot de passe oublié
            </p>
          </Link>
        </form>
      </div>
      <Link className="return-link" to="/" exact="true">
        <button type="button" className="button__return">
          Retour à l'accueil
        </button>
      </Link>
    </>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,

  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
