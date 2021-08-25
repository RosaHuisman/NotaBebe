import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function Contact() {
  return (
    <div className="contactbutton">
      <Link
        className="contactbutton__link"
        exact="true"
        to="/contact"
      >
        <button type="button" className="buttonContact">Contactez-nous</button>
      </Link>
    </div>
  );
}

export default Contact;
