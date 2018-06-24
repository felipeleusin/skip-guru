const initialState = {
  location: null,
  cuisine: null,
  priceRange: null,
  deliveryTime: null,
}

const UPDATE_WIZARD = 'UPDATE_WIZARD'

export function updateWizard(data) {
  return {
    type: UPDATE_WIZARD,
    payload: {
      data,
    },
  }
}

export const wizardSelector = ({ wizard }) => ({ data: wizard })

export default function wizardReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WIZARD:
      return {
        ...state,
        ...action.payload.data,
      }
    default:
      return state
  }
}
