import { combineReducers } from 'redux'

import {byId, ids, openNoteId} from './noteReducers'

export default combineReducers({
  byId,
  ids,
  openNoteId,
})
