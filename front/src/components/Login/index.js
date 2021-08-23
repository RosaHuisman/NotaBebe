import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Field from 'src/components/Field';

import './styles.scss';

const Login = ({
  email,
  password,
  changeFieldLogin,
  handleLogin,
  isError,
  handleLogin,
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
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={changeFieldLogin}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeFieldLogin}
            value={password}
          />
          <button
            className="settings__send"
            type="submit"
          >
            Se connecter
          </button>
          <Link to="/forgot">
            <p className="settings__forgot">
              Mot de passe oublié
            </p>
          </Link>
        </form>
      </div>
    </>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeFieldLogin: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
