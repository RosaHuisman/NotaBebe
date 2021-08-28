export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const SAVE_COMMENTS = 'SAVE_COMMENTS';


export const fetchComments = () => ({
  type: FETCH_COMMENTS,
})

export const saveComments = (comments) => ({
  type: SAVE_COMMENTS,
  payload: comments,
});
