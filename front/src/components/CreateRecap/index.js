import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';


import './styles.scss';

function CreateRecap({
  openNewNap, 
  isOpen, 
  onChangeValue, 
  name, 
  handleSubmit, 
  childSelected, 
  moodSelected, 
  timeNapSelected,

}) {

  const data = useLocation();
  const child = data.state.child;
  console.log(child)


  const handleClick = () => {
    openNewNap();
  };

  const changeValue = (e) => {
    e.preventDefault();
    //console.log('textarea value');
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
    <form className="createrecap" onSubmit={handleSubmit}>
      <div className="createrecap">
        <h1 className="createrecap__title">Création d'un récap pour </h1>
        <h1 className="createrecap__firstname">{child.first_name}</h1>

        
        <div className="createrecap__mood">
          <label htmlFor="mood-select" className="createrecap__mood__label">Humeur du jour :</label>
          <select name="mood" id="mood-select" onChange={selectMood}>
            <option value="0">--Sélectionner--</option>
            <option value="happy">Joyeux</option>
            <option value="middle">Ca va</option>
            <option value="grumpy">Grincheux</option>
          </select>
        </div>
        <div className="createrecap__nap">
          <label className="createrecap__nap__label" htmlFor="snap">Début sieste:</label>
          <input
            type="time"
            id="snap"
            name="snap"
            onChange={selectTimeNap}
            required
            className="createrecap__nap__input"
          />
        </div>
        <div className="createrecap__nap">
          <label className="createrecap__nap__label" htmlFor="enap">Fin sieste:</label>
          <input
            type="time"
            id="enap"
            name="enap"
            onChange={selectTimeNap}
            required
            className="createrecap__nap__input"
          />
        </div>

        <div className="createrecap__nap__comment">
          <label htmlFor="nap" className="createrecap__nap__comment__label">Commentaire sieste:</label>
          <textarea
            id="nap"
            name="nap"
            onChange={changeValue}
            rows="3"
            placeholder="Ecrivez votre commentaire"
            className="createrecap__nap__comment__textarea"
          />
        </div>

        {!isOpen ? (
          
            <button 
              type="button" 
              onClick={handleClick} 
              className="createrecap__nap__button"
              >
                Ajouter une sieste
              </button>
          
        ) : (
          <>
            <div className="createrecap__nap">
            <label className="createrecap__nap__label" htmlFor="snap2">Début sieste:</label>
            <input
              type="time"
              id="snap2"
              name="snap2"
              onChange={selectTimeNap}
              required
              className="createrecap__nap__input"
            />
          </div>
          <div className="createrecap__nap">
            <label className="createrecap__nap__label" htmlFor="enap2">Fin sieste:</label>
            <input
              type="time"
              id="enap2"
              name="enap2"
              onChange={selectTimeNap}
              required
              className="createrecap__nap__input"
            />
          </div>

          <div className="createrecap__nap__comment">
          <label htmlFor="nap2" className="createrecap__nap__comment__label">Commentaire sieste:</label>
          <textarea
            id="nap"
            name="nap"
            onChange={changeValue}
            rows="3"
            placeholder="Ecrivez votre commentaire"
            className="createrecap__nap__comment__textarea"
          />
        </div>

              <button type="buttons" onClick={handleClick} className="createrecap__nap__button">Annuler</button>

           
          </>
        )}

      <div className="createrecap__nap__comment">
          <label htmlFor="meal" className="createrecap__nap__comment__label">Commentaires repas:</label>
          <textarea
            id="meal"
            name="meal"
            onChange={changeValue}
            rows="3"
            className="createrecap__nap__comment__textarea"
          />
        </div>

        <div className="createrecap__nap__comment">
          <label htmlFor="others" className="createrecap__nap__comment__label">Autres commentaires:</label>
          <textarea
            id="others"
            name="others"
            onChange={changeValue}
            rows="3"
            className="createrecap__nap__comment__textarea"
          />
        </div>

          <button type="button" className="createrecap__submit">Créer le récap</button>
        
      </div>
      <div>-</div>
      </form>
   
  );
}

CreateRecap.propTypes = {

};

export default CreateRecap;
