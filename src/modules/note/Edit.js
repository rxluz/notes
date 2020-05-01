import React from 'react'
import { get } from 'lodash'
import * as PropTypes from 'prop-types'
import NotePage from './NotePage'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { settingsInterface } from 'Modules/settings/settings.interface'

import * as noteActions from './note.actions'
import { noteInterface } from './note.interface'
import { withRouter } from 'react-router'
import { useParams } from 'react-router-dom'

const Note = (props = noteInterface, { t: translate }) => {
  let { uuid } = useParams()

  const isDraft = false

  const defaultNote = {
    tags: [],
    title: '',
    colour: 'default',
    content: '',
    isDraft: !props.autoSave,
    isStarred: false,
  }

  const isNoteValid = !!props.notes[uuid]

  if (!isNoteValid) {
    props.history.push('/404')
  }

  const note = get(props.notes, uuid, defaultNote)

  return (
    <NotePage
      isPinned={note.isStarred || false}
      onPin={() => props.toggleStar({ uuid, isDraft })}
      tags={note.tags || []}
      colour={note.colour || 'default'}
      onAddTag={(event) => props.addTag({ uuid, tag: event.target.value, isDraft })}
      onChangeColour={({ colour }) => props.changeColour({ uuid, colour, isDraft })}
      onRemoveTag={(tag) => props.removeTag({ uuid, tag })}
      title={note.title}
      content={note.content}
      onDelete={() => props.deleteNote({ uuid }) && props.history.push('/')}
      onChangeTitle={(event) => props.changeTitle({ uuid, title: event.target.value, isDraft })}
      onChangeContent={(event) =>
        props.changeContent({ uuid, content: event.target.value, isDraft })
      }
      onClose={() => props.history.push('/')}
      onSaveAndClose={() => props.history.push('/')}
      onInfo={() => props.history.push('/shortcuts')}
      translate={translate}
      onSettings={() => props.history.push('/settings')}
    />
  )
}

Note.contextTypes = {
  t: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}

const mapStateToProps = ({ notes = noteInterface, settings = settingsInterface } = {}) => ({
  autoSave: settings.autoSave,
  notes: get(notes, 'list', []),
})

const mapDispatchToPros = (dispatch) =>
  bindActionCreators(
    {
      addNote: noteActions.addNote,
      addTag: noteActions.addTag,
      removeTag: noteActions.removeTag,
      changeColour: noteActions.changeColour,
      changeTitle: noteActions.changeTitle,
      changeContent: noteActions.changeContent,
      clearNote: noteActions.clearNote,
      toggleStar: noteActions.toggleStar,
      deleteNote: noteActions.deleteNote,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToPros)(withRouter(Note))
