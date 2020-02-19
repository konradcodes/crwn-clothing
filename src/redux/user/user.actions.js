//Action Creator
export const setCurrentUser = user => {
  //Return an action
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  };
};
