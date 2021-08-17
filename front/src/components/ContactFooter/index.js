import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'

import './styles.scss';

function ContactFooter(props) {
  return (
    <div className="contact-footer">
      <div className="contact-details">
        <p className="adress"><span><Icon name='home' /></span>7 rue des bambins, 75000 Paris</p>
        <p className="mail"><span><Icon name='mail' /></span>contact-creche@notabebe.fr</p>
        <p className="phone"><span><Icon name='phone' /></span>01.23.45.67.89</p>
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

