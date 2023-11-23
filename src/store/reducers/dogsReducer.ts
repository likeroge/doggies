import { IDogData } from '../../types/DogsTypes';
import { GET_ALL_DOGS, SET_SELECTED } from '../actionTypes';

const initialState = {
  dogs: [],
  selected: '',
};

export const dogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        selected: state.selected,
        dogs: action.payload.message.map((el:string, idx:any) => ({ image: el, id: idx })),
      };
    case SET_SELECTED:
      return {
        // selected: action.payload,
        selected: state.dogs.find((dog:IDogData) => dog.id === action.payload),
        dogs: state.dogs,
      };
    default:
      return state;
  }
};
