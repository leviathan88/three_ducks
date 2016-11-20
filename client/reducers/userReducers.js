export default function reducer(state={
  name: 'elvis',
  married: false
}, action) {
  switch(action.type) {
    case "CHANGE_NAME": {
      return { ...state, name: action.payload }
    }
    default:
      return state
  }
}
