import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Loading from 'src/components/App/Loading';

import HeaderParent from 'src/containers/HeaderParent';
import BasicInfos from './BasicInfos';
import Day from './Day';

import './styles.scss';

const ChildRecap = ({
  loadRecaps,
  loadChildren,
  child,
  loading,
  recap,
  loadParents,
  parent,
  closeCommentSend,
  childRecaps,

}) => {

const history = useHistory();


const previousPage = () => {
    history.goBack();
    closeCommentSend();
  };

  useEffect(() => {
    //loadParents();
    //loadChildren();
    loadRecaps(parent[0].user_id, child.id);
  }, []);

  console.log(parent[0].child_id)

  if (loading) {
    return <Loading />;
  } 

  let lastRecap = childRecaps.slice(-1)
  let oldRecaps = childRecaps.slice(0, -1).reverse()

  return (
    <>
      <div>
        <HeaderParent />
      </div>

        <div className="contentChildrecap">
        <div className="childrecap">
          <p className="childrecap__date">{lastRecap[0].date}</p>

          <BasicInfos  recap={lastRecap[0]} child={child} /* parent={parent} */ />
          <Day  recap={lastRecap[0]} child={child} />
        </div>

        <div className="backButton">
          <div className="backButton__contentButton">
         
            <button onClick={previousPage} type="button" className="settings__send">Retour</button>
          </div>
        </div>
      </div>

      

      {oldRecaps.map((recap) => {
        return(
        <div className="contentChildrecap" key={recap.id}>
        <div className="childrecap">
          <p className="childrecap__date">{recap.date}</p>

          <BasicInfos  recap={recap} child={child} /* parent={parent} */ />
          <Day  recap={recap} child={child} />
        </div>

        <div className="backButton">
          <div className="backButton__contentButton">
         
            <button onClick={previousPage} type="button" className="settings__send">Retour</button>
          </div>
        </div>
      </div>

        )
        
      })}
      
    </>
  );
};

ChildRecap.propTypes = {

};

ChildRecap.defaultProps = {
};

export default ChildRecap;
