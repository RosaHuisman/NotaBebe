import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from '../Field';
import Loading from '../App/Loading';

import './styles.scss';

const ForgotPassword = ({
  email, changezzzzz, handleForgot, messageForgot, successMessage, errorMessage, loading,
}) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForgot(e.target.name);
    // history.push('/homepage2');
    return history.push('/');
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="ForgotP">
        <div className="ForgotP__txt">
          <p className="ForgotP__txt__title">Mot de passe oublié ?</p>
          <p className="ForgotP__txt__subtitle">
            {messageForgot && 'Remplissez le formulaire et nous vous enverrons un email vous permettant de réinitialiser votre mot de passe.'}
            {errorMessage && <p className="setting__error">Oups! Erreur de saisie</p>}
            {successMessage && <p className="setting__success">Demande envoyée !</p>}
          </p>

        </div>
        <form autoComplete="off" className="loginForm__content" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={changezzzzz}
            type="email"
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
      <Link
        className="contentButton"
        exact="true"
        to="/"
      >
        <button type="button" className="settings__send">Retour</button>
      </Link>
    </>
  );
};

ForgotPassword.propTypes = {
  loading: PropTypes.bool,
  email: PropTypes.string.isRequired,
  changezzzzz: PropTypes.func.isRequired,
  handleForgot: PropTypes.func.isRequired,
  successMessage: PropTypes.bool.isRequired,
  errorMessage: PropTypes.bool.isRequired,
  messageForgot: PropTypes.bool,
};

ForgotPassword.defaultProps = {
  messageForgot: true,
  loading: false,
};

export default ForgotPassword;
