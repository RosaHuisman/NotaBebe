import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from 'src/components/App/Loading';
import { formatDate, formatHour } from 'src/store/selectors/formatDate';
import { filterComments } from 'src/store/selectors/comment';
import { childSearched } from 'src/store/selectors/user'


import './styles.scss';
//import commentsData from 'src/data/comments';

const Comments = ({ 
  recaps, 
  onSearchSubmit, 
  inputRef, 
  searchValue, 
  loading, 
  loadComments, 
  comments,
  loadChildren,
  //child,
  children,
  inputValue,
  onInputValueCommentChange
}) => {


  useEffect(() => {
    loadChildren();
    loadComments();
  }, [])

  if (loading) {
    return <Loading />;
  }

  // const [ searchNewValue, setSearchNewValue ] = useState('');
  // const [comments] = useState([]);

// filterComments(comments, inputValue);

return (
  <>
    <h1>Les commentaires parents</h1>
    <h2>{comments.length}</h2>
    <div className="filter">
      <form onSubmit={onSearchSubmit}>
        <input
          ref={inputRef}
          className="filter__input"
          //fluid
          value={inputValue}
          onChange={(e) => onInputValueCommentChange(e.target.value)}
          placeholder="Filtrer les commentaires"
          />
      </form>
    </div>
    <div className="comments__list">
      { filterComments(comments, inputValue).map((comment) => (
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
