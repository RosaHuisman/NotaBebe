import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss';
import commentsData from 'src/data/comments';
// console.log('mes données 2:', commentsData),
// console.log('Salut');

const Comments = ({
  recaps, onSearchSubmit, inputRef, searchValue,
}) => {

  console.log('coucou');
  console.log('mes données:', commentsData);

return (
  <>
    <h1>Les commentaires parents</h1>
    <div className="filter">
      <form onSubmit={onSearchSubmit}>
        <input
          ref={inputRef}
          className="filter__input"
          fluid
          placeholder="Filtrer les commentaires"
          />
      </form>
    </div>
    <div className="comments__list">
      { commentsData.map((data) => (
        <div key={data.id} className="comment">
          <h1 className="comment__child">Prénom: {data.child_id}</h1>
          <h2>Date: xx.xx.xxx</h2>
          <p className="comment__message">Message: {data.message}</p>
        </div>
      ))}
    </div>
    </>
)};

Comments.propTypes = {
  
}

export default Comments;

