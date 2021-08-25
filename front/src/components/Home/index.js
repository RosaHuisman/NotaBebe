import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Contact from 'src/components/Contact';
import Field from '../Field';

import './styles.scss';

const Home = ({
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
      <div className="welcome">
        <div className="welcome__title">
          <p>Bienvenue sur NotaBebe,</p>
          <p>Merci de vous connecter</p>
        </div>
        {/* <Link className="return-link" to="/" exact="true">
          <button type="button" className="button__return">
            Retour à l'accueil
          </button>
        </Link> */}
        {/* <Link to="/login">
        <div className="welcome__submit">
          Se connecter
        </div>
      </Link> */}
      </div>
      <div className="loginForm">
        <div className="loginForm__title">
          Connexion
        </div>
        {/* {isError
          && (
          <div className="loginForm__errorMsg">
            <p className="loginForm__errorMsg__error">
              Erreur de connexion
            </p>
            <p className="loginForm__errorMsg__errorBis">
              Veuillez vérifier vos identifiants de connexion
            </p>
          </div>
          )} */}
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
      <Contact />
    </>
  );
};

Home.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  // isError: PropTypes.bool.isRequired,
};

export default Home;
