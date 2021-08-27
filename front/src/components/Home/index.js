import React from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
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
  successMessage,
  user,
  logged,
}) => {
  // const history = useHistory();
  const getToken = localStorage.getItem('MyToken');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    // history.push('/homepage2');
    // return history.push('/admin');
  };

  // console.log("mon user", user)

  return (
    <>
      {getToken ? (
        <>
          <div className="welcomeHome">
            <div className="welcomeHome__titleHome">
              <p>Bonjour {user.firstName} {user.lastName}</p>
              <p>Vous êtes connecté</p>
            </div>
          </div>

          {user.roleId === 1 && 3
            ? (
              <Link
                className="contentButton"
                exact="true"
                to={`/profile/parent/${user.userId}`}
              >
                <button type="button" className="settings__send">Mon espace personnel</button>
              </Link>
            )
            : user.roleId === 2 && 3
              ? (
                <Link
                  className="contentButton"
                  exact="true"
                  to={`/profile/staff/${user.userId}`}
                >
                  <button type="button" className="settings__send">Mon espace personnel</button>
                </Link>
              )
              : (
                <Link
                  className="contentButton"
                  exact="true"
                  to="/admin"
                >
                  <button type="button" className="settings__send">Mon espace personnel</button>
                </Link>
              )}

          {/* { user.roleId === 1 ? (
          <Link
          className="contentButton"
          exact="true"
          to="/profile/parent/:id"
        >
          <button type="button" className="settings__send">Mon espace personnel</button>
        </Link>
        ) : (
          <div className="empty"></div>
        )} */}

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
                  // onChange={changeField}
                  // value={email}
                  type="email"
                  required
                />
                <Field
                  name="password"
                  type="password"
                  placeholder="Mot de passe"
                  // onChange={changeField}
                  // value={password}
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
          {successMessage
       && (
         <>
           <p className="setting__success">Vous êtes connecté !</p>
           <Redirect to="/" />
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
  // changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  errorMessage: PropTypes.bool,
  contentHome: PropTypes.bool,
  successMessage: PropTypes.bool,
};

Home.defaultProps = {
  email: '',
  errorMessage: false,
  contentHome: true,
  successMessage: false,
};

export default Home;
