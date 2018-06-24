import { createSelector } from 'reselect'
import reduce from 'lodash/reduce'
import values from 'lodash/values'

const initialState = {
  items: {},
  quantities: {},
}

const ADD_ITEM = 'ADD_ITEM'
const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY'
const CLEAR_ORDER = 'CLEAR_ORDER'

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

export const orderSelector = createSelector(
  ({ order }) => order,
  ({ items, quantities }) => {
    const total = reduce(
      quantities,
      (sum, quantity, itemId) => {
        const item = items[itemId]
        return sum + item.price * quantity
      },
      0,
    )

    return { items: values(items), quantities, total }
  },
)

const onAddItem = (state, action) => {
  if (action.payload.clearOrder) {
    return {
      items: { [action.payload.item.id]: action.payload.item },
      quantities: { [action.payload.item.id]: 1 },
    }
  }
  return {
    items: { ...state.items, [action.payload.item.id]: action.payload.item },
    quantities: { ...state.quantities, [action.payload.item.id]: 1 },
  }
}

export default function ordeerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return onAddItem(state, action)
    case CLEAR_ORDER:
      return { items: {}, quantities: {} }
    case UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        quantities: {
          ...state.quantities,
          [action.payload.id]: action.payload.quantity,
        },
      }
    default:
      return state
  }
}
