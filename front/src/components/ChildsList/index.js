import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HeaderStaff from 'src/containers/HeaderStaff';

import './styles.scss';
import ChildsData from 'src/data/childs';
import Loading from 'src/components/App/Loading';

const ChildsList = ({
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

  return (
    <>
      <div>
        <HeaderStaff />
      </div>
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
          <div key={child.id} className="childs__child">
            <h1 className="childs__child__name">{child.first_name} {child.last_name}</h1>
            
            <div className="childs__child__infos">
              {child.sex === 'F' ? (
                <>
                <h2>Née le: {child.birthdate}</h2>
                <p> Fille </p>
                </>
              ) : (
                <>
                <h2>Né le: {child.birthdate}</h2>
                <p> Garçon </p>
                </>
              )}
              </div>
            <div className="childs__child__infos">
              {child.allergies ? (
                <p> Allergies: {child.allergies}</p>
              ) : (
                <p> Allergies: Aucune </p>
              )}
              </div>
            <Link
              to={{
                pathname: `/profile/staff/children/${child.id}/createrecap`,
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
  );
};

ChildsList.propTypes = {

};

export default ChildsList;
