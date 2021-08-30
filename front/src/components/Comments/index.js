import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import Loading from 'src/components/App/Loading'

import './styles.scss';
//import commentsData from 'src/data/comments';
// console.log('mes données 2:', commentsData),
// console.log('Salut');

const Comments = ({ recaps, onSearchSubmit, inputRef, searchValue, loading, loadComments, comments }) => {


  console.log(comments);
  // console.log('mes données:', commentsData);

  useEffect(() => {
    loadComments();
  }, [])

  if (loading) {
    return <Loading />;
  }

  return (
  <>
    <h1>Les commentaires parents</h1>
    <div className="filter">
      <form onSubmit={onSearchSubmit}>
        <input
          ref={inputRef}
          className="filter__input"
          //fluid
          placeholder="Filtrer les commentaires"
          />
      </form>
    </div>
    <div className="comments__list">
      { comments.map((comment) => (
        <div key={comment.id} className="comment">
          <h1 className="comment__child">Prénom: {comment.child_id}</h1>
          <h2>Date: xx.xx.xxx</h2>
          <p className="comment__message">Message: {comment.message}</p>
        </div>
      ))}
    </div>
  </>
)};

export default Comments;

