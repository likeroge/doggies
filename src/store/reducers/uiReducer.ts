import { SET_MODAL_VISIBLE } from '../actionTypes';

const initialState = {
  modalVisible: false,
};

export const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MODAL_VISIBLE:
      return {
        modalVisible: action.payload,
      };
    default:
      return state;
  }
};
