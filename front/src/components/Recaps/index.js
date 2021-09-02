import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import recaps from 'src/store/middlewares/recap';
import Loading from 'src/components/App/Loading';

import {childSearched} from 'src/store/selectors/user'
import './styles.scss';
// import data from 'src/data/recaps';



// Dans mon composant FilterRecaps ci dessous, j'y ai mis:
// Le titre 
// Le filtre de recherche
// Le rendu des récaps

const Recaps = ({
  recaps, 
  onSearchSubmit, 
  inputRef, 
  searchValue,
  loading,
  inputValue, 
  onInputValueRecapChange,
  loadRecaps,
  loadChildren,
  children,
}) => {
  // je définis la date du jour 
//  const datetime = new Date();
//  // je mets la date du format 02/09/2021
//  const date = (('0'+datetime.getDate()).slice(-2)+"/"+('0'+(datetime.getMonth()+1)).slice(-2)+"/"+datetime.getFullYear());
//  console.log(date);
//   // je compare la date du jour avec la date des recaps
//  function filter_date(recaps) {
//     return recaps.date == date;
//   }
//   // je filtre sur le tableau avec les dates comparées
//  const recapsFiltered = recaps.filter(filter_date);

 
 
 useEffect(() => {
    loadChildren();
    loadRecaps();
    
  }, [])


  console.log(loading)
  console.log(children);

  if (loading) {
    return <Loading />;
  }
  
  // console.log('mes recaps:', recaps);  
  console.log('un recap:', recaps[0]);
  // console.log(recaps.length);
 
  return (
  <>
    <h1>Mes récapitulatifs enfants </h1>
    <h2>{recaps.length}</h2>
    <div className="filter">
      <form onSubmit={onSearchSubmit}>
        <input
          ref={inputRef}
          className="filter__input"
          //fluid
          value={inputValue}
          onChange={(e) => onInputValueRecapChange(e.target.value)}
          placeholder="Filtrer les récaps"
          />
      </form>
    </div>
    <div className="staff__recap">
      { recaps.map((recap) => (
        <div key={recap.id} className="recap">
          <h1 className="recap__title">{childSearched(children, recap.child_id)} - {recap.date}</h1>
          <span>Son humeur: {recap.mood}</span>
          { recap.naps ? (
            <>
            <p> Sieste(s) </p>
             {recap.naps.map((nap) => {  
              return(
                <div
                key={nap.id}
                >
                <p className="recap__sleep"> {nap.start_time} - {nap.end_time} </p>
                <p>{nap.comment}</p>
                </div>
              )
            })}
            </>
          ) : null}
          { recap.meals ? (
            <>
            <p> Repas: </p>
             {recap.meals.map((meal) => {  
              return(
                <div
                key={meal.id}
                >
                <p className="recap__meal"> {meal.comment} </p>
                </div>
              )
            })}
            </>
          ) : null}
         
          <p className="recap__others__comments">Divers: {recap.extra_info}</p>
        </div>
      ))}
    </div>
    <div>.</div>
  </>
  )};

Recaps.propTypes = {

};

export default Recaps;
