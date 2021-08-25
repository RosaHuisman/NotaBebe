import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function Contact() {
  return (
    <Link
      className="submitbutton"
      exact="true"
      to="/contact"
    >
      <button type="button" className="buttonAction">Contactez-nous</button>
    </Link>
  );
}

export default Contact;
