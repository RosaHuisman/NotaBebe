// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

// == Import : local
import './styles.scss';

// == Composant
const Comment = ({
  submitComment,
  commentSend,
  onChangeTextValue,
  name,
}) => {
  const handleSubmit = (evt) => {
    // console.log('je clique sur submit')
    evt.preventDefault();
    submitComment();
  };

  const handleOnChange = (evt) => {
    onChangeTextValue(evt.target.value, name);
  };

  return (

    <>
      {commentSend ? (
        <>
          {/* Ici on veut envoyer le message sur la base de données,
          on pourra le faire quand on aura la route prévue pour par le back,
          il faudra donc vérifier si le message a un contenu,
          l'enregister en BDD et si tout ca est ok,
          on renverra le message "Votre message a bien été envoyé" */}
          <div className="comment__success">Votre message a bien été envoyé</div>
        </>
      ) : (
        <div>

          <form
            autoComplete="off"
            className="comment"
            onSubmit={handleSubmit}
          >

            <div className="comment__text">
              <label
                htmlFor="comment"
                className="comment__text__label"
              >
                Votre message pour la crèche :
                <textarea
                  id="comment"
                  name="comment"
                  rows="4"
                  className="comment__text__textarea"
                  placeholder="Saisissez votre message..."
                  onChange={handleOnChange}
                />
              </label>
            </div>

            <button
              className="comment__submit"
              type="submit"
            >
              Envoyer le message
            </button>
          </form>
        </div>

      )}
    </>

  );
};

Comment.propTypes = {

};

// == Export
export default Comment;
