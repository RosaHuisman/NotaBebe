import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import Loading from 'src/components/App/Loading'

import { formatDate, formatHour } from 'src/store/selectors/formatDate'
import { childSearched } from 'src/store/selectors/user'


import './styles.scss';
//import commentsData from 'src/data/comments';
// console.log('mes données 2:', commentsData),
// console.log('Salut');

const Comments = ({ 
    onSearchSubmit, 
    inputRef, 
    searchValue, 
    loading, 
    loadComments, 
    comments,
    loadChildren,
    //child,
    children,
  }) => {


  //console.log(children);
  // console.log('mes données:', commentsData);

  useEffect(() => {
    loadChildren();
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
          <h1 className="comment__child"> {childSearched(children, comment.child_id )}</h1>
          <p className="comment__child__date">
          Date: {formatDate(comment.created_at)} à {formatHour(comment.created_at)}
          </p>
          <p className="comment__message">Message: {comment.message}</p>
        </div>
      ))}
    </div>
    <div>-</div>
  </>
)};

export default Comments;

