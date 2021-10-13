export const FETCH_CHILDREN = 'FETCH_CHILDREN';
export const SAVE_CHILDREN = 'SAVE_CHILDREN';
export const EMPTY_STATE_CHILDREN = 'EMPTY_STATE_CHILDREN';


export const fetchChildren = () => ({
  type: FETCH_CHILDREN,
})

export const saveChildren = (children) => ({
  type: SAVE_CHILDREN,
  payload: children,
});

export const emptyStateChildren = () => ({
  type: EMPTY_STATE_CHILDREN,
})