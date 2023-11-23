import {
  GET_ALL_DOGS, SET_MODAL_VISIBLE, SET_SELECTED, SET_USER_STATE,
} from './actionTypes';
import { IUserState } from '../types/UserTypes';
import api, { baseUrl } from '../api/api';

export const getAllDogs = (dogs: any) => ({
  type: GET_ALL_DOGS,
  payload: dogs,
});

export const getDogsFromApi = () => async (dispatch:any) => {
  api.get(baseUrl)
    .then((res) => dispatch(getAllDogs(res.data)));
};

export const setSelectedDog = (id:number) => ({
  type: SET_SELECTED,
  payload: id,
});

export const setUserData = (userData:IUserState) => ({
  type: SET_USER_STATE,
  payload: userData,
});

export const setModalVisible = (value:boolean) => ({
  type: SET_MODAL_VISIBLE,
  payload: value,
});
