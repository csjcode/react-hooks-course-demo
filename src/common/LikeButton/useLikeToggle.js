import React, { useReducer } from 'react';

export const useLikeToggle = ({ id, liked }) => {
  const actions = {
    LOADING: 'LOADING',
    LIKED: 'LIKED',
    UNLIKED: 'UNLIKED',
    ERROR: 'ERROR',
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'LOADING':
        return { ...state, loading: true };
      case 'ERROR':
        return { ...state, loading: false, error: action.error };
      case 'LIKE':
        return { ...state, loading: false, liked: true };
      case 'UNLIKE':
        return { ...state, loading: false, liked: false };
      default: {}
    }
  }
  const [state, dispatch] = useReducer(reducer, { loading: false, liked });

  const like = () => {
    dispatch({ type: actions.LOADING });
    // api.like(id)
    //   .then(() => dispatch({ type: actions.LIKED }))
    //   .catch(error => dispatch({ type: actions.ERROR }, error));
  };

  const unlike = () => {
    dispatch({ type: actions.LOADING });
    // api.unlike(id)
    //   .then(() => dispatch({ type: actions.UNLIKED }))
    //   .catch(error => dispatch({ type: actions.ERROR }, error));
  };

  return [state, { like, unlike }];
};