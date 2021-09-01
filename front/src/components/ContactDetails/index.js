import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Header from 'src/containers/Header';

import { Icon, Button } from 'semantic-ui-react';

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
        <div className="backButtonContact">
          <Button
            type="button"
            onClick={previousPage}
            icon
            labelPosition="left"
            primary
            size="tiny"
          >
            <Icon name="angle left" />Retour
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
