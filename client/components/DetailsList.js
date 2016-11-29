import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import * as style from './style';
import * as actionCreators from '../actions/noteActions';
import * as selectors from '../selectors/note.selectors';

const NoteDetail = ({ note, removeNote, closeNote, updateNote }) => (
  <div style={style.wrapper}>
    {!note
      ? <div style={style.blankslate}>No note is open</div>
      : <div style={style.note}>
          <div style={style.date}>
            {new Date(note.timestamp).toLocaleString()}
          </div>
          <textarea
            autoFocus
            key={note.id}
            style={style.textarea}
            onChange={(event) => updateNote(event.target.value, note.id)}
            placeholder="New note..."
            value={note.content}
            />
          <div style={style.row}>
            <button
              onClick={() => removeNote(note.id)}
              style={{ ...style.button, ...style.danger }}
              >
              Remove
            </button>
            <button
              onClick={closeNote}
              style={style.button}
              >
              Close
            </button>
          </div>
        </div>
    }
  </div>
);

const mapStateToProps = (state) => ({
  note: selectors.getNote(state, selectors.getOpenNoteId(state)),
});

export default connect(mapStateToProps, actionCreators)(NoteDetail);
