import React from 'react';

import './styles.scss';

const Login = () => (
  <div className="contentForm">
    <div className="contentForm__title">
      Connexion
    </div>
    <div className="contentForm__inputLogin">
      <form className="ui form inputSize">
        <div className="field config">
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div className="field config">
          <label>Mot de passe</label>
          <input type="text" name="password" placeholder="Mot de passe" />
        </div>

        <button className="ui button config" type="submit">Se connecter</button>
        <div className="forgot">
          <a href="#">Mot de passe oublié</a>
        </div>
      </form>
    </div>
  </div>
);

export default Login;
