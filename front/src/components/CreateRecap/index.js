import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function CreateRecap({
  openNewNap, isOpen, onChangeValue, name, handleSubmit, childSelected, moodSelected, timeNapSelected
}) {
  const handleClick = () => {
    openNewNap();
  };

  const changeValue = (e) => {
    e.preventDefault();
    console.log('textarea value');
    onChangeValue(e.target.value, name);
  };

  const selectChild = (e) => {
    e.preventDefault();
    childSelected(e.target.value, name);
  }

  const selectMood = (e) => {
    e.preventDefault();
    moodSelected(e.target.value, name);
  }

  const selectTimeNap = (e) => {
    e.preventDefault();
    timeNapSelected(e.target.value, name);
  }

  return (
    <>
    <form className="create__recap__form" onSubmit={handleSubmit}>
      <div className="create__recap">
        <h1>Création d'un récap</h1>

        <div className="child__select">
          <label htmlFor="child-select">Choisir l'enfant:</label>
          <select name="childs" id="child-select" onChange={selectChild}>
            <option value="0">--Sélectionner--</option>
            <option value="1">Child 1</option>
            <option value="2">Child 2</option>
            <option value="3">Child 3</option>
          </select>
        </div>
        <div className="input__mood">
          <label htmlFor="mood-select">Choisir l'humeur:</label>
          <select name="mood" id="mood-select" onChange={selectMood}>
            <option value="0">--Sélectionner--</option>
            <option value="happy">Joyeux</option>
            <option value="middle">Moyen</option>
            <option value="grumpy">Grincheux</option>
          </select>
        </div>
        <div className="nap__time">
          <label className="snap" htmlFor="snap">Début sieste:</label>
          <input
            type="time"
            id="snap"
            name="snap"
            onChange={selectTimeNap}
            required
          />

          <label className="enap" htmlFor="enap">Fin sieste:</label>
          <input
            type="time"
            id="enap"
            name="enap"
            onChange={selectTimeNap}
            required
          />
        </div>

        <div className="comments__nap">
          <label htmlFor="nap">Commentaires sieste:</label>
          <textarea
            id="nap"
            name="nap"
            onChange={changeValue}
            rows="5"
            cols="30"
            placeholder="Ecrivez votre commentaire"
          />
        </div>

        {!isOpen ? (
          <div className="nap__button">
            <button type="button" onClick={handleClick}>+</button>
          </div>
        ) : (
          <>
            <div className="nap__time">
              <label className="snap" htmlFor="snap">Début sieste:</label>
              <input
                type="time"
                id="snap"
                name="snap"
                min="06:00"
                max="18:00"
                required
              />

              <label className="enap" htmlFor="enap">Fin sieste:</label>
              <input
                type="time"
                id="enap"
                name="enap"
                min="06:00"
                max="18:00"
                required
              />
            </div>

            <div className="comments__nap">
              <label htmlFor="nap2">Commentaires sieste:</label>
              <textarea
                id="nap2"
                name="nap2"
                onChange={changeValue}
                rows="5"
                cols="30"
              />

              <button type="buttons" onClick={handleClick}>Annuler</button>

            </div>
          </>
        )}

      <div className="comments__meal">
          <label htmlFor="meal">Commentaires repas:</label>
          <textarea
            id="meal"
            name="meal"
            onChange={changeValue}
            rows="5"
            cols="30"
          />
        </div>

        <div className="comments__others">
          <label htmlFor="others">Autres commentaires:</label>
          <textarea
            id="others"
            name="others"
            onChange={changeValue}
            rows="5"
            cols="30"
          />
        </div>

        <div className="submit__button">
          <button type="button">Créer le récap</button>
        </div>
      </div>
      </form>
    </>
  );
}

CreateRecap.propTypes = {

};

export default CreateRecap;
