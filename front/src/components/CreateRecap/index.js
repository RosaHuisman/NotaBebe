import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss';

function CreateRecap(props) {
  return (
    <>
    <div className="create__recap">
      <h1>Création d'un récap</h1>
    
    <div className="child__select">
    <label for="child-select">Choisir l'enfant:</label>
    <select name="childs" id="child-select">
      <option value="">--Sélectionner--</option>
      <option value="1">Child 1</option>
      <option value="2">Child 2</option>
      <option value="3">Child 3</option>
    </select>
    </div>
    <div className="input__mood">
      <label for="mood">Saisir l'humeur du jour:</label>
      <input type="text" id="mood" name="mood"/>
    </div>
    <div className="nap__time">
      <label className="snap" for="snap">Début sieste:</label>
      <input type="time" id="snap" name="snap"
       min="06:00" max="18:00" required />

      <label className="enap" for="enap">Fin sieste:</label>
      <input type="time" id="enap" name="enap"
      min="06:00" max="18:00" required />
    </div>

    <div className="comments__nap">
      <label for="nap">Commentaires sieste:</label>
      <textarea id="nap" name="nap"
          rows="5" cols="30">
          ...
      </textarea>
    </div>

    <div className="comments__meal">
      <label for="meal">Commentaires repas:</label>
      <textarea id="meal" name="meal"
          rows="5" cols="30">
          ...
      </textarea>
    </div>

    <div className="comments__others">
      <label for="others">Autres commentaires:</label>
      <textarea id="others" name="others"
          rows="5" cols="30">
          ...
      </textarea>
    </div>

    <div className="submit__button">
    <button type="button" >Créer le récap</button>
    </div>
    </div>
    </>
  )
}

CreateRecap.propTypes = {

}

export default CreateRecap

