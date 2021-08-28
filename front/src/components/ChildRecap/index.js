import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';


import Header from 'src/components/Header';
import BasicInfos from './BasicInfos';
import Day from './Day';


import './styles.scss';

const ChildRecap = ({

}) => {

  const data = useLocation();

  //console.log('recap dans childrecap', data.state.recap)
  const recap = data.state.recap;
  const parent = data.state.parent;
  //console.log(parent)
  return ( 
  <>
    <header className="header">
      <Header />
    </header>

    <div className="childrecap">
    <p className="childrecap__date">{recap[0].date}</p>

    <BasicInfos recap={recap} parent={parent}/>
    <Day recap={recap}/>
    </div>

  </>)

 
};

ChildRecap.propTypes = {

};

ChildRecap.defaultProps = {
};

export default ChildRecap;
