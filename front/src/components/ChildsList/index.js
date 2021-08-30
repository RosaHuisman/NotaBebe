import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss';
import ChildsData from 'src/data/childs';


const ChildsList = ({
  recaps, onSearchSubmit, inputRef, searchValue,
}) => (
  <>
    <h1>Mes récapitulatifs enfants</h1>
    <div className="filter">
      <form onSubmit={onSearchSubmit}>
        <input
          ref={inputRef}
          className="filter__input"
          fluid
          placeholder="Filtrer les enfants"
          />
      </form>
    </div>
    <div className="childs__list">
      { ChildsData.map((data) => (
        <a key={data.id} href="http://localhost:8080/child/:id" className="child">
          <h1 className="child__identity">Prénom: {data.first_name} - Nom: {data.last_name}</h1>
          <h2>Né(e) le: {data.birthdate}</h2>
          <p className="child__sex">Genre: {data.sex}</p>
          <p className="child__allergies">Allergies: {data.allergies}</p>
        </a>
      ))}
    </div>
    </>
  )
  

ChildsList.propTypes = {

}

export default ChildsList

