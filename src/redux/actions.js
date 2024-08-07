// actions.js
import { ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY } from './actionTypes';

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});
