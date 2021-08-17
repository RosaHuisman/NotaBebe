import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'semantic-ui-react';

function ContactDetails(props) {
  return (
    <div className="contact-details">
      <div className="nursery-contact">
        <h1>Pour contacter la crèche:</h1>
        <p className="adress"><span><Icon name='home' /></span>7 rue des bambins, 75000 Paris</p>
        <p className="mail"><span><Icon name='mail' /></span>contact-creche@notabebe.fr</p>
        <p className="phone"><span><Icon name='phone' /></span>01.23.45.67.89</p>
      </div>
      <div className="admin-contact">
        <h1>Pour contacter l'Admin:</h1>
        <p className="mail"><span><Icon name='mail' /></span>admin@dev-notabebe.fr</p>
      </div>
    </div>
  )
}

ContactDetails.propTypes = {

}

export default ContactDetails

