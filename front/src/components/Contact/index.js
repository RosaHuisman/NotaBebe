import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

function Contact(props) {
  return (
      <div className="contact-button">
        <Link className="contact-link" to='/contact' exact="true">
        <button type="button" className="button">Contactez-nous</button>
        </Link>
      </div>
  )
}

Contact.propTypes = {

}

export default Contact

