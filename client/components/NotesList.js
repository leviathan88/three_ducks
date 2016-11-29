import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/noteActions';
import * as selectors from '../selectors/note.selectors';

const NotesList = ({notes, openNoteId, addNote, openNote}) => (
  <div>
    <button onClick={addNote}>Add Note</button>
    {(notes.length===0)?<div>no notes</div>
    :notes.map(note=> (
      <button
            key={note.id}
            onClick={() => openNote(note.id)}
            >
            {note.content === ''
              ? <span>New note...</span>
              : note.content
            }
          </button>
    ))}
  </div>
)

const mapStateToProps = (state) => ({
  notes: selectors.getNotes(state),
  openNoteId: selectors.getOpenNoteId(state),
});

export default connect(mapStateToProps, actionCreators)(NotesList);
