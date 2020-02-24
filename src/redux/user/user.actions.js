import { UserActionTypes } from './user.types';

//Action Creator
export const setCurrentUser = user => {
  //Return an action
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
  };
};
