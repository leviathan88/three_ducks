export const byId = (state = {}, { type, payload }) => {
  switch (type) {
    case 'app/addNote':
    case 'app/updateNote':
      return Object.assign(state, { [payload.id]: payload });
    case 'app/removeNote':
      return Object.assign(state, delete state[payload.id])
    default:
      return state;
  }
};
