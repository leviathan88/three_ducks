export const getMockState = {
  withNoNotes: () => ({
    byId: {},
    ids: [],
    openNoteId: null,
  }),
  withOneNote: () => ({
    byId: {
      'id-123': {
        id: 'id-123',
        content: 'Hello world',
        timestamp: 1,
      },
    },
    ids: [ 'id-123' ],
    openNoteId: 'id-123',
  }),
  // Etc... for all state shapes we need for our tests.
};
