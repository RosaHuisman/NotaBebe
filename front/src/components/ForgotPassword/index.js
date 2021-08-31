import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';
import Loading from '../App/Loading';

import './styles.scss';

const ForgotPassword = ({
  handleForgot, messageForgot, successMessage, errorMessage, loading,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleForgot();
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
            type="email"
            required
          />
          <button
            type="submit"
            className="settings__send"
          >
            Réinitialiser le mot de passe
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
