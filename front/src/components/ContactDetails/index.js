import React from 'react';

import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './styles.scss';

const ContactDetails = () => (
  <div className="contact__details">
    <div className="nursery__contact">
      <h1>Pour contacter la crèche:</h1>
      <p className="adress"><span><Icon name="home" /></span>7 rue des bambins, 75000 Paris</p>
      <p className="mail"><span><Icon name="mail" /></span>contact-creche@notabebe.fr</p>
      <p className="phone"><span><Icon name="phone" /></span>01.23.45.67.89</p>
    </div>
    <div className="admin__contact">
      <h1>Pour contacter l'Administrateur du site:</h1>
      <p className="mail"><span><Icon name="mail" /></span>admin@notabebe.fr</p>
    </div>
    <div className="dev__team">
      <h1>Pour contacter l'équipe de conception du site:</h1>
      <p className="mail"><span><Icon name="mail" /></span>devteam@notabebe.fr</p>
    </div>
    <Link className="contentButton" to="/" exact="true">
      <button type="button" className="settings__send">
        Retour à l'accueil
      </button>
    </Link>
  </div>
);

export default ContactDetails;
