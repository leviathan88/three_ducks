export const byId = (state = {}, { type, payload }) => {
  switch (type) {
    case 'app/addNote':
    case 'app/updateNote':
      return Object.assign(state, { [payload.id]: payload }); //es7: {...state, [payload.id]: payload}
    case 'app/removeNote':
      return Object.assign(state, delete state[payload.id]) //es7: {...state, delete state[payload.id]}
    default:
      return state;
  }
};

export const ids = (state = [], { type, payload }) => {
  switch (type) {
    case 'app/addNote':
      return [payload.id,...state];
    case 'app/removeNote':
      return state.filter(note=>note.id===payload.id)
    default:
      return state;
  }
};

export const openNoteId = (state = null, { type, payload }) => {
  switch (type) {
    case 'app/openNote':
    case 'app/addNote':
      return payload.id;
    case 'app/closeNote':
    case 'app/removeNote':
      return null;
    default:
      return state;
  }
};
