import { combineReducers } from 'redux'

import user from './userReducers'
import note from './noteReducers'

export default combineReducers({
  note: note
})
