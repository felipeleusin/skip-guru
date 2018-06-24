const initialState = {}

const SET_WIZARD_DATA = 'SET_WIZARD_DATA'

export function setData(data) {
  return {
    type: SET_WIZARD_DATA,
    payload: {
      data,
    },
  }
}

export default function wizardReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WIZARD_DATA:
      return {
        ...state,
        ...action.payload.data,
      }
    default:
      return state
  }
}
