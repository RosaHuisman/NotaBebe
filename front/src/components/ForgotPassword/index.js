import React, { useState } from 'react';
import axios from 'axios';

import './styles.scss';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    // handleForgot();
    const data = {
      email,
    };

    axios.post('http://localhost:3001/forgot', data).then(
      (response) => {
        console.log(response);
      },
    ).catch(
      (error) => {
        console.log(error);
      },
    );
  };

  return (
    <div className="ForgotP">
      <div className="ForgotP__txt">
        <p className="ForgotP__txt__title">Mot de passe oublié ?</p>
        <p className="ForgotP__txt__subtitle">Remplissez le formulaire et nous vous enverrons un email vous permettant de réinitialiser votre mot de passe.</p>
      </div>

      <form
        className="ForgotP__content"
        onSubmit={handleSubmitPassword}
      >
        <input
          className="setting__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          type="email"
          required
        />
        <button
          className="setting__send"
          type="submit"
        >
          Réinitialiser le mot de passe
        </button>
        {/* {isError && <p className="setting__notexist">Email non existant</p>} */}
      </form>
    </div>
  );
};

export default ForgotPassword;
