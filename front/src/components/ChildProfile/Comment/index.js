// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';



// == Import : local
import './styles.scss';

// == Composant
const Comment = ({
  
}) => {

  const handleSubmit = (evt) => {
    //console.log('je clique sur submit')
    evt.preventDefault();
    subMitComment();
  };

  return (

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
        </label>

      <textarea 
        id="comment" 
        name="comment"
        rows="4" 
        className="comment__text__textarea"
        placeholder="Saisissez votre message..."
        >
      </textarea>
    </div>

    <button
          className="comment__submit"
          type="submit"
        >
        Envoyer le message
        </button>

        </form>

        


  );
};

Comment.propTypes = {
 
};


// == Export
export default Comment;



