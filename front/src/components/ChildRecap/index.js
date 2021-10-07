import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';

import Loading from 'src/components/App/Loading';

import HeaderParent from 'src/containers/HeaderParent';
import BasicInfos from './BasicInfos';
import Day from './Day';
import OldRecaps from './OldRecaps';


import './styles.scss';

const ChildRecap = ({
  loadRecaps,
  loading,
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
    loadRecaps(parent[0].user_id, child.child_id);
  }, []);


  const data = useLocation();
  const child = data.state.child;

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

      <OldRecaps oldRecaps={oldRecaps} child={child}/>
      
    </>
  );
};

ChildRecap.propTypes = {

};

ChildRecap.defaultProps = {
};

export default ChildRecap;
