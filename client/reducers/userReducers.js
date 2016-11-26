export const reducer = ( state={}, action ) => {
  switch(action.type) {
    case "CHANGE_NAME_TO_UMAR": {
      return {...state, name: action.payload}
    }
    default:
      return state
  }
}
