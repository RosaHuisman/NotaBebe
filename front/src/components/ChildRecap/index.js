import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import BasicInfos from './BasicInfos'
import Day from './Day'


import './styles.scss';

const ChildRecap = ({
  

}) => {
  

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <BasicInfos />
      <Day />

    </>
  );
};

ChildRecap.propTypes = {

};

ChildRecap.defaultProps = {
};

export default ChildRecap;
