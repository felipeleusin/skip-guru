import { combineReducers } from 'redux'

import wizard from './wizard'
import order from './order'

const rootReducer = combineReducers({
  wizard,
  order,
})

export default rootReducer
