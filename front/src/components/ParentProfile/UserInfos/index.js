// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './styles.scss';

// == Composant
const UserInfos = ({
  lastname, 
  firstname, 
  address, 
  postcode, 
  city, 
  email, 
  phone_number,
  openUserInfos,
}) => {
  
  const handleOnClickChangeInfosButton = () => {
    openUserInfos();
  };

  return (
    <div className="userinfos">
      <p>Nom: {lastname} </p>
      <p>prénom: {firstname} </p>
      <p>Adresse: {address} </p> 
      <p>{postcode} {city} </p> 
      <p>Tél.: {phone_number} </p> 
      <p>Email: {email} </p>

      <button 
        type="button" 
        className="userinfos__button"
        onClick={handleOnClickChangeInfosButton}
      >
      Modifier mes informations
      </button>

    </div>

  );
};

UserInfos.propTypes = {
  
};



// == Export
export default UserInfos;



