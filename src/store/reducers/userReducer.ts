import { IUserState } from '../../types/UserTypes';
import { SET_USER_STATE } from '../actionTypes';

const initialState:IUserState = {
  username: null,
  phone: null,
  selectedDogId: null,
};

// eslint-disable-next-line default-param-last
export const userReducer = (state:IUserState = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_STATE:
      return action.payload;
    default:
      return state;
  }
};
