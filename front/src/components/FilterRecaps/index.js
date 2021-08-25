import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import recaps from 'src/store/middlewares/recaps';

import './styles.scss';
import data from 'src/data/recap';
//console.log(data);

// Dans mon composant FilterRecaps ci dessous, j'y ai mis:
// Le titre "Mes Recaps" + Icon
// Le filtre de recherche 
// Le rendu des récaps 

const FilterRecaps = ({ recaps, onSearchSubmit, inputRef, searchValue }) => {

  return (
    <>
    <div className="recaps">
       <p className="my__recap"><span><Icon name='file text' size='large'/></span>Mes Récaps</p>
    </div>
    <div className="filter">
      <form onSubmit={onSearchSubmit}>
        <input
          ref={inputRef}
          className="filter__input"
          fluid
          placeholder="Filtrer les récaps"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
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
  )
}

FilterRecaps.propTypes = {

}

export default FilterRecaps

