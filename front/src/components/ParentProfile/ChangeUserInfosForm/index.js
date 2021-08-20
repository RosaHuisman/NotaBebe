// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';


// == Import : local
import './styles.scss';

// == Composant
const ChangeUserInfosForm = ({
  hasInfosError,
  closeForm,
  lastname, 
  firstname, 
  address, 
  postcode, 
  city, 
  email, 
  phone_number,
  handleChangeInfos


}) => {

  const handleOnClickCancelButton = () => {
    closeForm();
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleChangeInfos();
  };

  return (
    <form
    autoComplete="off"
    className="changeuserinfosform"
    onSubmit={handleSubmit}
  >
    <p className="changeuserinfosform__fullname">{lastname} {firstname} </p>
    <p className="changeuserinfosform__email">{email}</p>

    <Field
      name="address"
      type="text"
      placeholder="Adresse"
      value={address}
    />

    <Field
      name="postcode"
      type="text"
      placeholder="Code postal"
      value={postcode}
    />

      <Field
      name="city"
      type="text"
      placeholder="Commune"
      value={city}
    />
   
    <Field
      name="phone_number"
      type="text"
      placeholder="Numéro de téléphone"
      value={phone_number}
    />
  

    <div className="changeuserinfosform__buttons" >
        <button
        className="changeuserinfosform__buttons__cancel"
        type="button"
        onClick={handleOnClickCancelButton}
        >
        Annuler
        </button>

        <button
          className="changeuserinfosform__buttons__send"
          type="submit"
        >
        Valider
        </button>
       
      </div>

      {/* voir comment gérer l'erreur une fois qu'on pourra se connecter au back */}

      {hasInfosError && <div>Veuillez vérifier vos identifiants</div>}
  </form>

    
  );
};

ChangeUserInfosForm.propTypes = {
  hasInfosError: PropTypes.bool,
  closeForm: PropTypes.func.isRequired,
  lastname: PropTypes.string.isRequired, 
  firstname: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
  handleChangeInfos: PropTypes.func.isRequired,
  
};

ChangeUserInfosForm.defaultProps = {
  hasInfosError: false,
};

// == Export
export default ChangeUserInfosForm;



