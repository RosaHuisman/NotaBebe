import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Header from 'src/containers/Header';

import { Icon } from 'semantic-ui-react';

import './styles.scss';

const ContactDetails = () => {
  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  const previousPage = () => {
    history.goBack();
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="containerContact">
        <div className="contactDetails">
          <div className="contactDetails__nursery">
            <h1>Pour contacter la crèche:</h1>
            <div className="contactDetails__txt">
              <p><Icon name="home" />7 rue des bambins, 75000 Paris</p>
              <p><Icon name="mail" />contact-creche@notabebe.fr</p>
              <p><Icon name="phone" />01.23.45.67.89</p>
            </div>
          </div>
          <div className="contactDetails__admin">
            <h1>Pour contacter l'Administrateur du site:</h1>
            <div className="contactDetails__txt">
              <p><Icon name="mail" />admin@notabebe.fr</p>
            </div>
          </div>
          <div className="contactDetails__devTeam">
            <h1>Pour contacter l'équipe de conception du site:</h1>
            <div className="contactDetails__txt">
              <p><Icon name="mail" />notabebe.dev@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="backButton">
          <div className="backButton__contentButton">
            <button onClick={previousPage} type="button" className="settings__send">Retour</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default ContactDetails;
