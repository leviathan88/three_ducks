import test from 'tape';
import * as userActions from '../actions/userActions';

test('user action | change name to Umar', ({deepEqual, end})=> {
  const actualAction = userActions.changeNameToUmar();
  const expectedAction = {
    type: 'CHANGE_NAME_TO_UMAR',
    payload: 'Umar'
  }

  deepEqual(actualAction, expectedAction)
  end()
})
