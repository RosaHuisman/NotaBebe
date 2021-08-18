import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function Contact() {
  return (
    <div className="contact-button">
      <Link
        className="contact-link"
        exact="true"
        to="/contact"
      >
        <button type="button" className="button">Contactez-nous</button>
      </Link>
    </div>
  );
}

export default Contact;
