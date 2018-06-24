const initialState = {
  items: [],
  quantities: {},
}

const ADD_ITEM = 'ADD_ITEM'
const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY'

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

// TODO: this is a good candidate for a reselect selector if things get complicated
export const orderSelector = ({ order: { items, quantities } }) => ({ items, quantities })

const onAddItem = (state, action) => {
  if (action.payload.clearOrder) {
    return {
      items: [action.payload.item],
      quantities: { [action.payload.item.id]: 1 },
    }
  }
  return {
    items: [...state.items, action.payload.item],
    quantities: { ...state.quantities, [action.payload.item.id]: 1 },
  }
}

export default function ordeerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return onAddItem(state, action)
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
