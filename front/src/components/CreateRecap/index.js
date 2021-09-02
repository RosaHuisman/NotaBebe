import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';

import HeaderStaff from 'src/containers/HeaderStaff';
import { changeDate } from 'src/store/selectors/formatDate';

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
  dateSelected,
  napFormList,
  napFormLimit,
  removeLastNap,
  addNewNap,
  save,

}) => {
  // useEffect(() => {

  // }, []);

  const data = useLocation();
  const { child } = data.state;
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCreateRecap(child.id);
  };

  const handleAddNapFormClick = () => {
    addNewNap();
  };

  const handleRemoveNapFormClick = () => {
    removeLastNap();
  };

  const changeValue = (e) => {
    e.preventDefault();
    onChangeValue(e.target.value, e.target.name);
  };

  const selectMood = (e) => {
    e.preventDefault();
    moodSelected(e.target.value, e.target.name);
  };

  const selectTimeNap = (e) => {
    e.preventDefault();
    timeNapSelected(e.target.value, e.target.name);
  };

  const selectDate = (e) => {
    e.preventDefault();
    const newDate = changeDate(e.target.value);
    dateSelected(newDate, e.target.name);
  };

  const handleOnClick = () => {
    history.goBack();
  };

  return (
    <>
      <HeaderStaff />
      { save ? (
        <div>
          Récap créé avec succès pour {child.first_name}
          <button onClick={handleOnClick}> Retour</button>
        </div>
      ) : (

        <form className="createrecap" onSubmit={handleSubmit}>
          <div className="createrecap">
            <h1 className="createrecap__title">Création d'un récap pour </h1>
            <h1 className="createrecap__firstname">{child.first_name}</h1>

            <div className="createrecap__date">
              <label htmlFor="date" className="createrecap__date__text"> Date: </label>
              <input
                type="date"
                id="date"
                name="date"
                min="2020-01-01"
                max="2030-12-31"
                onChange={selectDate}
              />
            </div>

            <div className="createrecap__mood">
              <label htmlFor="mood-select" className="createrecap__mood__label">Humeur du jour :</label>
              <select name="mood" id="mood-select" onChange={selectMood}>
                <option value="0">--Sélectionner--</option>
                <option value="happy">Joyeux</option>
                <option value="middle">Ca va</option>
                <option value="grumpy">Grincheux</option>
              </select>
            </div>

            {/* // FORM NAPS */}

            {napFormList.map((form) => (
              <div key={form.id} className="createrecap__nap">
                <h2 className="createrecap__nap__title">Sieste </h2>

                <div className="createrecap__nap__time">
                  <div className="createrecap__nap__time__designation">
                    <p>De</p>
                    <p> A </p>
                  </div>
                  <div className="createrecap__nap__time__inputs">
                    <input
                      type="time"
                      id="snap"
                      // step="900"
                      name={form.nameStartNap}
                      onChange={selectTimeNap}
                      className="createrecap__nap__time__inputs__input"
                    />

                    <input
                      type="time"
                      id="enap"
                      name={form.nameEndNap}
                      onChange={selectTimeNap}
                      className="createrecap__nap__time__inputs__input"
                    />
                  </div>
                </div>

                <div className="createrecap__nap__comment">
                  <textarea
                    id="nap"
                    name={form.nameCommentNap}
                    onChange={changeValue}
                    rows="3"
                    placeholder="Ecrivez votre commentaire"
                    className="createrecap__nap__comment__textarea"
                  />
                </div>
              </div>
            ))}

            {/* // ADD NAP BUTTON */}
            {napFormLimit < 3 && (
            <button
              type="button"
              onClick={handleAddNapFormClick}
              className="createrecap__nap__button"
            >
              Ajouter une autre sieste
            </button>
            )}

            {/* // CANCEL BUTTON */}
            {napFormLimit > 1 && (
            <button type="button" onClick={handleRemoveNapFormClick} className="createrecap__nap__button__cancel">Annuler</button>
            )}

            <div className="createrecap__nap__comment">
              <label htmlFor="meal" className="createrecap__nap__comment__label">Commentaire repas:</label>
              <textarea
                id="meal"
                name="comment_meal"
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

      )}

    </>
  );
};

CreateRecap.propTypes = {

};

export default CreateRecap;
