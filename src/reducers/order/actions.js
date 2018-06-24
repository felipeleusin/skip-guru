import { ADD_ITEM, UPDATE_ITEM_QUANTITY, CLEAR_ORDER } from './constants'

export function addItem({ item, clearOrder }) {
  return {
    type: ADD_ITEM,
    payload: { item, clearOrder },
  }
}

export function updateItem({ item, quantity }) {
  return {
    type: UPDATE_ITEM_QUANTITY,
    payload: {
      id: item.id,
      quantity,
    },
  }
}

export function clearOrder() {
  return {
    type: CLEAR_ORDER,
  }
}
