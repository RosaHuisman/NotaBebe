import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import './styles.scss';
import ChildsData from 'src/data/childs';
import Loading from 'src/components/App/Loading';



const ChildsList = ({
  recaps, 
  onSearchSubmit, 
  inputRef, 
  searchValue, 
  loading,
  children,
  loadChildren,
}) => {
  
  useEffect(() => {
    loadChildren();
  }, []);

  if (loading) {
    return <Loading />;
  } 

console.log(children)
  return (
    <>
    <h1>Mes récapitulatifs enfants</h1>
    <div className="filter">
      <form onSubmit={onSearchSubmit}>
        <input
          ref={inputRef}
          className="filter__input"
          //fluid
          placeholder="Filtrer les enfants"
          />
      </form>
    </div>
    <div className="childs__list">
      { children.map((child) => (
        <a key={child.id} href="http://localhost:8080/child/:id" className="child">
          <h1 className="child__identity">Prénom: {child.first_name} - Nom: {child.last_name}</h1>
          <h2>Né(e) le: {child.birthdate}</h2>
          <p className="child__sex">Genre: {child.sex}</p>
          <p className="child__allergies">Allergies: {child.allergies}</p>
        </a>
      ))}
    </div>
    </>
  )

}
  
  
  

ChildsList.propTypes = {

}

export default ChildsList

