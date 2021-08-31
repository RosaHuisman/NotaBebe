import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { changeDate } from 'src/store/selectors/formatDate'

import './styles.scss';

const CreateRecap = ({
  openNewNap, 
  isOpen, 
  onChangeValue, 
  name, 
  moodSelected, 
  timeNapSelected,
  value,
  submitCreateRecap,
  dateSelected

}) => {

  const data = useLocation();
  const child = data.state.child;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('je clique sur submit')
    submitCreateRecap(child.id);
  }

  const handleClick = () => {
    openNewNap();
  };

  const changeValue = (e) => {
    e.preventDefault();
    onChangeValue(e.target.value, e.target.name);
  };

  const selectMood = (e) => {
    e.preventDefault();
    moodSelected(e.target.value, e.target.name);
  }

  const selectTimeNap = (e) => {
    e.preventDefault();
    timeNapSelected(e.target.value, e.target.name);
  }

  const selectDate = (e) => {
    e.preventDefault();
    const newDate = changeDate(e.target.value)
    dateSelected(newDate, e.target.name);

  }

  return (
    <form className="createrecap" onSubmit={handleSubmit}>
      <div className="createrecap">
        <h1 className="createrecap__title">Création d'un récap pour </h1>
        <h1 className="createrecap__firstname">{child.first_name}</h1>

        <label htmlFor="date"> Date: </label>

        <input type="date" id="date" name="date"
          //value="2021-08-31"
           min="2020-01-01" max="2030-12-31" 
           onChange={selectDate}
           />

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
            name="start_nap_1"
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
            name="end_nap_1"
            onChange={selectTimeNap}
            required
            className="createrecap__nap__input"
          />
        </div>

        <div className="createrecap__nap__comment">
          <label htmlFor="nap" className="createrecap__nap__comment__label">Commentaire sieste:</label>
          <textarea
            id="nap"
            name="comment_nap_1"
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
              name="start_nap_2"
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
              name="end_nap_2"
              onChange={selectTimeNap}
              required
              className="createrecap__nap__input"
            />
          </div>

          <div className="createrecap__nap__comment">
          <label htmlFor="nap2" className="createrecap__nap__comment__label">Commentaire sieste:</label>
          <textarea
            id="nap"
            name="comment_nap_2"
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

          <button type="submit" className="createrecap__submit">Créer le récap</button>
        
      </div>
      <div>-</div>
      </form>
   
  );
}

CreateRecap.propTypes = {

};

export default CreateRecap;
