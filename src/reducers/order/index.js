import { ADD_ITEM, UPDATE_ITEM_QUANTITY, CLEAR_ORDER } from './constants'

const initialState = {
  items: {},
  order: [],
  quantities: {},
}

const onAddItem = (state, action) => {
  if (action.payload.clearOrder) {
    return {
      items: { [action.payload.item.id]: action.payload.item },
      order: [action.payload.item.id],
      quantities: { [action.payload.item.id]: 1 },
    }
  }
  return {
    items: { ...state.items, [action.payload.item.id]: action.payload.item },
    order: [...state.order, action.payload.item.id],
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

export * from './actions'
export * from './selectors'
