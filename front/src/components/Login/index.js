import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Field from '../Field';

import './styles.scss';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  isError,
}) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    // history.push('/homepage2');
    return history.push('/admin');
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
        <form autoComplete="off" className="loginForm__content" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
            type="email"
            required
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
            required
          />
          <button
            type="submit"
            className="settings__send"
          >
            Se connecter
          </button>
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
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default Login;
