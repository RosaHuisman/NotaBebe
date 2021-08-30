import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import recaps from 'src/store/middlewares/recap';
import Loading from 'src/components/App/Loading'

import './styles.scss';
import data from 'src/data/recaps';

// Dans mon composant FilterRecaps ci dessous, j'y ai mis:
// Le titre 
// Le filtre de recherche
// Le rendu des récaps

const Recaps = ({
  recaps, onSearchSubmit, inputRef, searchValue, loading, loadRecaps
}) => {
  // console.log('les vrais recaps sont là:', recaps);
  const napsRecaps = (recaps[1]);
  console.log('les naps:', napsRecaps )

  

  useEffect(() => {
    loadRecaps();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
  <>
    <h1>Mes récapitulatifs enfants</h1>
    <div className="filter">
      <form onSubmit={onSearchSubmit}>
        <input
          ref={inputRef}
          className="filter__input"
          fluid
          placeholder="Filtrer les récaps"aff
          />
      </form>
    </div>
    <div className="staff__recap">
      { recaps.map((recap) => (
        <div key={recap.id} className="recap">
          <h1 className="recap__title">{recap.child_id} - {recap.date}</h1>
          <span>Humeur du jour: {recap.mood}</span>
          {/* { recaps.naps.map((nap) =>(
            <>
           <p className="recap__sleep">Sieste: {nap.start_time} / {nap.end_time} </p>
          <p className="recap__sleep__comment">{nap.naps_comment}</p>
          </>
          ))
          } */}
          {/* <p className="recap__sleep">Sieste: {recap.naps[1].start_time} / {recap.naps[1].end_time} </p>
          <p className="recap__sleep__comment">{recap.naps_comment}</p> */}
          <p className="recap__meal__time">Horaire: {recap.meals[0].time}</p>
          <p className="recap__meal__time">Commentaires: {recap.meals[0].comment}</p>
          <p className="recap__others__comments">Divers: {recap.extra_info}</p>
        </div>
      ))}
    </div>
  </>
  )};

Recaps.propTypes = {

};

export default Recaps;
