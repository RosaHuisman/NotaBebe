import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'semantic-ui-react';
import recaps from 'src/store/middlewares/recap';

import './styles.scss';
import data from 'src/data/recaps';


// Dans mon composant FilterRecaps ci dessous, j'y ai mis:
// Le titre 
// Le filtre de recherche
// Le rendu des récaps

const Recaps = ({
  recaps, onSearchSubmit, inputRef, searchValue,
}) => (
  console.log('hello'),
  console.log('mes recaps:', data),
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
      { data.map((data) => (
        <div key={data.id} className="recap">
          <h1 className="recap__title">{data.child} - {data.date}</h1>
          <span>{data.mood}</span>
          <p className="recap__sleep">Sieste: {data.nap_time}</p>
          <p className="recap__sleep__comment">{data.nap_comments}</p>
          <p className="recap__meal__comment">{data.meal}</p>
          <p className="recap__others__comments">Divers: {data.others_comments}</p>
        </div>
      ))}
    </div>
  </>
);

Recaps.propTypes = {

};

export default Recaps;
