import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

import Field from './Field';

import Header from 'src/components/Header';

import './styles.scss';
//import { changeInfos } from '../../store/actions';


const ParentProfile = ({
  lastname, 
  firstname, 
  address, 
  cp, 
  city, 
  email, 
  phone_number,
  changeUserInfos,
  change_infos,
  changeField,
  togglerChangePassword,
  change_password,
  closeChangeInfos,
  
}) => {

  const handleOnClickChangeInfosButton = () => {
    changeUserInfos();
  };

  const handleOnClickChangePasswordButton = () => {
    togglerChangePassword();
  }
  
  const handleOnClickCancelButton = () => {
    closeChangeInfos();
  }

  return (
  <>
    <header className="header">
      <Header />
    </header>

    <div className="parentprofile">
    {!change_infos ? (
      
      <div className="parentprofile__informations">
        <p>Nom: {lastname} </p>
        <p>prénom: {firstname} </p>
        <p>Adresse: {address} </p> 
        <p>{cp} {city} </p> 
        <p>Tél.: {phone_number} </p> 
        <p>Email: {email} </p>

        <button 
          type="button" 
          className="parentprofile__button"
          onClick={handleOnClickChangeInfosButton}
        >
        Modifier mes informations
        </button>

      </div>
    ) : (
      <form
        autoComplete="off"
        className="parentprofile__informations"
        //onSubmit={}
      >
        <p className="parentprofile__informations__fullname">{lastname} {firstname} </p>

        <Field
          name="address"
          type="text"
          placeholder="Addresse"
          onChange={changeField}
          value={address}
        />

        <Field
          name="cp"
          type="text"
          placeholder="Code postal"
          onChange={changeField}
          value={cp}
        />

          <Field
          name="city"
          type="text"
          placeholder="Commune"
          onChange={changeField}
          value={city}
        />
       
        <Field
          name="phone_number"
          type="text"
          placeholder="Numéro de téléphone"
          onChange={changeField}
          value={phone_number}
        />
        
        <Field
          name="email"
          type="email"
          placeholder="Adresse Email"
          onChange={changeField}
          value={email}
        />

        <div className="parentprofile__buttons" >
            <button
            className="parentprofile__buttons__cancel"
            type="button"
            onClick={handleOnClickCancelButton}
            >
            Annuler
            </button>

            <button
              className="parentprofile__buttons__send"
              type="submit"
            >
            Valider
            </button>
           
          </div>
      </form>
    )}

    {!change_password ? (
      <button 
          type="button" 
          className="parentprofile__button"
          onClick={handleOnClickChangePasswordButton}
        >
        Changer mon mot de passe
        </button>
    ): (
      <div className="coucou">Coucou
      <form>
        <button>
        Submit
        </button>
      </form>
      </div>
    )}
      

      <div className="parentprofile__children">
        <h3> Mes enfants </h3>
        
        <div className="parentprofile__children__icons">
          <Link to="/profile/parent/:id/child/:id">
          <Icon 
            name="smile outline" 
            size="huge" 
            className="parentprofile__children__icons__icon" />
          </Link> 
          
          <Link to="/profile/parent/:id/child/:id">
          <Icon 
            name="smile outline" 
            size="huge" 
            className="parentprofile__children__icons__icon" />
          </Link> 
        </div>
       

      </div>

    </div>

  </>
    )
};

ParentProfile.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  cp: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired
};


export default ParentProfile;
