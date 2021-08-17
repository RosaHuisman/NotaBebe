import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';


import './styles.scss';


const ParentProfile = ({
  lastname, 
  firstname, 
  addres, 
  cp, 
  city, 
  email, 
  phone_number
}) => {

  return (
  <>
    <header className="header">
      <Header />
    </header>

    <div className="parentprofile">
      <div className="parentprofile__informations">
        <p>Nom: {lastname} </p>
        <p>prénom: {firstname} </p>
        <p>Adresse: {addres} </p> 
        <p>{cp} {city} </p> 
        <p>Numéro de téléphone: {phone_number} </p> 
        <p>Email: {email} </p> 
      </div>
     
    </div>
     
  </>
    )
};

ParentProfile.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  addres: PropTypes.string.isRequired,
  cp: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired
};


export default ParentProfile;
