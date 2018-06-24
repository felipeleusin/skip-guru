const initialState = {
  item: null,
}

const BEGIN_ORDER = 'BEGIN_ORDER'

export function beginOrder(item) {
  return {
    type: BEGIN_ORDER,
    payload: item,
  }
}

export const orderSelector = ({ order: { item } }) => ({ item })

export default function ordeerReducer(state = initialState, action) {
  switch (action.type) {
    case BEGIN_ORDER:
      return {
        item: action.payload,
      }
    default:
      return state
  }
}
