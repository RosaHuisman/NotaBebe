import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './styles.scss';

function ContactFooter(props) {
  return (
    <div className="contact-footer">
      <div className="contact-button">
        <Link className="contact-link" to={'/contact'} exact>
        <button type="button" className="button">Contactez-nous</button>
        </Link>
      </div>
      <div className="footer"> 
      <a href="" className="mention-link">Mentions légales</a>
      <br />
      <span className="devteam">Développé par NotaBebe-Tardis</span>
      </div>
    </div>
  )
}

ContactFooter.propTypes = {

}

export default ContactFooter

