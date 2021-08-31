import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

import './styles.scss';

const Home = ({
  email,
  password,
  changeField,
  handleLogin,
  errorMessage,
  contentHome,
  user,
  logged,
}) => {
  const getToken = localStorage.getItem('MyToken');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <>
      {getToken ? (
        <>
          {user.roleId === 1
            && (
              <Redirect to={`/profile/parent/${user.userId}`} />
            )}

          {user.roleId === 2
            && (
              <Redirect to={`/profile/staff/${user.userId}`} />
            )}

          {user.roleId === 3
            && (
              <Redirect to="/admin" />
            )}
        </>

      ) : (

        <div className="containerMain">
          {contentHome
            && (
              <>
                <div className="welcomeHome">
                  <div className="welcomeHome__titleHome">
                    <p>Bienvenue sur NotaBebe,</p>
                    <p>Merci de vous connecter</p>
                  </div>
                </div>

                <div className="loginForm">
                  <div className="loginForm__title">
                    Connexion
                  </div>
                  {errorMessage
                    && (
                      <div className="loginForm__errorMsg">
                        <p className="loginForm__errorMsg__error">
                          Erreur de connexion
                        </p>
                        <p className="loginForm__errorMsg__errorBis">
                          Veuillez vérifier vos identifiants
                        </p>
                      </div>
                    )}
                  <form autoComplete="off" className="loginForm__content" onSubmit={handleSubmit}>
                    <Field
                      name="email"
                      placeholder="Adresse Email"
                      type="email"
                      required
                    />
                    <Field
                      name="password"
                      type="password"
                      placeholder="Mot de passe"
                      required
                    />
                    <button
                      type="submit"
                      className="settings__send"
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

                <Link
                  className="contentButton"
                  exact="true"
                  to="/contact"
                >
                  <button type="button" className="settings__send">Contactez-nous</button>
                </Link>
              </>
            )}
        </div>
      )}
    </>
  );
};

Home.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  errorMessage: PropTypes.bool,
  contentHome: PropTypes.bool,
};

Home.defaultProps = {
  email: '',
  errorMessage: false,
  contentHome: true,
};

export default Home;
