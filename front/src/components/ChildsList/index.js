import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


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
    <h1>La liste des enfants</h1>
    <div className="filter">
      {/* <form onSubmit={onSearchSubmit}>
        <input
          ref={inputRef}
          className="filter__input"
          //fluid
          placeholder="Filtrer les enfants"
          />
      </form> */}
    </div>
    <div className="childs">
      { children.map((child) => (
          <div key={child.id} className="childs__child" >
          <h1 className="childs__child__name">{child.first_name} {child.last_name}</h1>
          <h2>Né(e) le: {child.birthdate}</h2>
          <p className="childs__child__infos">Genre: {child.sex}</p>
          <p className="childs__child__infos">Allergies: {child.allergies}</p>
          <Link
          to={{
          pathname: `/staff/children/${child.id}/createrecap`,
          state: {
            child: child,
          },
          }}
          >
          <button
            className="childs__child__createrecapbutton"
             type="button"
         >
           Créer un récap
         </button>
          </Link>
          
        </div>
      ))}
    </div>
    </>
  )

}
  
  
  

ChildsList.propTypes = {

}

export default ChildsList

