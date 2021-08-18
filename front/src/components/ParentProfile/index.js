import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

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
}) => {

  const handleOnClickButton = () => {
    console.log('je veux modifier le state au click');
    console.log('infos on click', change_infos)

    changeUserInfos();
  };
  console.log('infos', change_infos)

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
          onClick={handleOnClickButton}
        >
        Modifier mes informations
        </button>

      </div>
    ) : (
      <form
        className="parentprofile__informations"
        //onSubmit={}
      >
        <div>
          <label>
          Nom :
            <input 
              className="parentprofile__informations__input"
              type="text" 
              name="lastname" 
              value={lastname} 
              //placeholder={lastname}
              //onChange={}
              />
          </label>
          </div>
          
        <div>
        <label>
          Prénom :
            <input 
              className="parentprofile__informations__input"
              type="text" 
              name="firstname" 
              value={firstname} 
              //onChange={}
              />
          </label>
        </div>

        <div>
        <label>
          Adresse :
            <input 
              className="parentprofile__informations__input"
              type="text" 
              name="address" 
              value={address} 
              //onChange={}
              />
          </label>
        </div>

        <div>
        <label>
          Code postal: 
            <input 
              className="parentprofile__informations__input"
              type="text" 
              name="cp" 
              value={cp} 
              //onChange={}
              />
          </label>
          <label>
          Commune: 
            <input 
              className="parentprofile__informations__input"
              type="text" 
              name="city" 
              value={city} 
              //onChange={}
              />
          </label>
        </div>

        <div>
        <label>
          Tél. :
            <input 
              className="parentprofile__informations__input"
              type="text" 
              name="phone_number" 
              value={phone_number} 
              //onChange={}
              />
          </label>
        </div>

        <div>
        <label>
          Email :
            <input 
              className="parentprofile__informations__input"
              type="email" 
              name="email" 
              value={email} 
              //onChange={}
              />
          </label>
        </div>
    
        <div className="parentprofile__buttons" >
            <button
                  className="parentprofile__buttons__cancel"
                  type="button"
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

      <button 
          type="button" 
          className="parentprofile__button"
        >
        Changer mon mot de passe
        </button>

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
