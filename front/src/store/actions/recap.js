export const FETCH_RECAPS = 'FETCH_RECAPS';
export const SAVE_RECAPS = 'SAVE_RECAPS';


export const fetchRecaps = () => ({
  type: FETCH_RECAPS,
})

export const saveRecaps = (recaps) => ({
  type: SAVE_RECAPS,
  payload: recaps,
});
