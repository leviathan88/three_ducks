import test from 'tape';
import * as noteActions from '../actions/noteActions';

test('action creator | addNote :: Create correct action',
  ({ deepEqual, end }) => {

    const actualAction = noteActions.addNote('Hi', 'id-123', 1);
    const expectedAction = {
      type: 'app/addNote',
      payload: {
        id: 'id-123',
        content: 'Hi',
        timestamp: 1,
      },
    };

    deepEqual(actualAction, expectedAction);
    end();
  }
);

test('action creator | updateNote :: Create correct action',
  ({ deepEqual, end }) => {

    const actualAction = noteActions.updateNote('Hello', 'id-123', 2);
    const expectedAction = {
      type: 'app/updateNote',
      payload: {
        id: 'id-123',
        content: 'Hello',
        timestamp: 2,
      },
    };

    deepEqual(actualAction, expectedAction);
    end();
  }
);

test('action creator | removeNote :: Create correct action',
  ({ deepEqual, end }) => {

    const actualAction = noteActions.removeNote('id-123');
    const expectedAction = {
      type: 'app/removeNote',
      payload: {
        id: 'id-123',
      },
    };

    deepEqual(actualAction, expectedAction);
    end();
  }
);

test('action creator | openNote :: Create correct action',
  ({ deepEqual, end }) => {

    const actualAction = noteActions.openNote('id-123');
    const expectedAction = {
      type: 'app/openNote',
      payload: {
        id: 'id-123',
      },
    };

    deepEqual(actualAction, expectedAction);
    end();
  }
);

test('action creator | closeNote :: Create correct action',
  ({ deepEqual, end }) => {

    const actualAction = noteActions.closeNote();
    const expectedAction = {
      type: 'app/closeNote',
    };

    deepEqual(actualAction, expectedAction);
    end();
  }
);
