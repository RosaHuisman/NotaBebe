import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import Field from 'src/components/Field';


import './styles.scss';
import data from 'src/data/recap';


console.log(data);
//console.log(data[1].child);

//const handleSearch = (event) =>{}



const StaffProfile = () => {

// const onFilterSubmit = (e) => {
//   e.preventDefault();
//   onGetDataFilter();
// }

  return (
    <div className="staff">
      <div className="staff__name">
        <h2> Dupont-Moretti Christine</h2>
      </div>
      <div className="staff__button">
      <div className="staff__button__comments">
        <Link className="comments__link" to='/contact' exact="true">
        <button type="button" className="button">Commentaires</button>
        </Link>
      </div>
     <div className="staff__button__recap">
        <Link className="recap__link" to='/contact' exact="true">
        <button type="button" className="button">Créer un récap</button>
        </Link>
      </div>
      </div>
      <div className="ui divider"></div>
      <div className="recaps">
       <p className="my__recap"><span><Icon name='file text' size='large'/></span>Mes Récaps</p>
      </div>
      
      <div className="recaps__filter">
     <input
          className="filter__input"
          value={filterValue}
          onChange={onFilterChange}
          type="text"
          placeholder="Filtrer"
        />
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
       //< key={data.id} data={dataAll} />
    ))}
    </div>
  </div> 
  
  )
}

StaffProfile.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onFilterSubmit: PropTypes.func.isRequired
}

export default StaffProfile

