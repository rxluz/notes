import React from 'react'
import { get } from 'lodash'
import * as PropTypes from 'prop-types'
import NotePage from './NotePage'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { settingsInterface } from 'modules/settings/settings.interface'

import * as noteActions from './note.actions'
import { noteInterface } from './note.interface'
import { withRouter } from 'react-router'

const onSaveAndClose = ({ saveAndCreateNew, changeUUID, publishNote, history, uuid }) => {
  publishNote({ uuid })
  if (saveAndCreateNew) {
    changeUUID(uuidv4())
  } else {
    history.push('/')
  }
}

const onClose = ({ saveAndCreateNew, deleteNote, uuid, history }) => {
  if (!saveAndCreateNew) {
    deleteNote({ uuid })
  }

  history.push('/')
}

const Note = (props = noteInterface, { t: translate }) => {
  const [uuid, changeUUID] = React.useState(uuidv4())

  const isDraft = !props.autoSave

  const defaultNote = {
    uuid,
    tags: [],
    title: '',
    colour: 'default',
    content: '',
    isDraft: !props.autoSave,
    isStarred: false,
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
      onRemoveTag={(tag) => props.removeTag({ uuid, tag, isDraft })}
      title={note.title}
      content={note.content}
      onDelete={() => props.deleteNote({ uuid })}
      onChangeTitle={(event) => props.changeTitle({ uuid, title: event.target.value, isDraft })}
      onChangeContent={(event) =>
        props.changeContent({ uuid, content: event.target.value, isDraft })
      }
      onClose={() =>
        onClose({
          saveAndCreateNew: props.saveAndCreateNew,
          deleteNote: props.deleteNote,
          uuid,
          history: props.history,
        })
      }
      onSaveAndClose={() =>
        onSaveAndClose({
          saveAndCreateNew: props.saveAndCreateNew,
          changeUUID,
          publishNote: props.publishNote,
          history: props.history,
          uuid,
        })
      }
      onSettings={() => props.history.push('/settings')}
      translate={translate}
      onInfo={() => props.history.push('/shortcuts')}
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
  saveAndCreateNew: settings.saveAndCreateNew,
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
      deleteNote: noteActions.deleteNote,
      toggleStar: noteActions.toggleStar,
      publishNote: noteActions.publishNote,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToPros)(withRouter(Note))
