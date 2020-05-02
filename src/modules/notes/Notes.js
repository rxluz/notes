import React from 'react'
import * as PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { isTermInsideItems } from 'common/utils/general.utils'

import { notesInterface } from './notes.interface'
import NotesInterface from './NotesPage'
import * as settingActions from './notes.actions'

const filterNotesBySearchTerm = ({ notes = [], searchTerm }) =>
  searchTerm === ''
    ? notes
    : (notes || []).filter(({ title = '', content = '', tags = [] }) =>
        isTermInsideItems({ items: [title, content, tags], term: searchTerm }),
      )

const getNotes = (list) =>
  Object.keys(list)
    .map((key) => list[key])
    .filter(({ isDraft = true }) => !isDraft)
    .sort((a, b) => a.isStarred - b.isStarred)
    .reverse()

const Notes = (props = notesInterface, { t: translate }) => (
  <NotesInterface
    onOpenNote={(uuid) => props.history.push(`/edit/${uuid}`)}
    onSettings={() => props.history.push(`/settings`)}
    onSearch={() => props.history.push('/search')}
    onClearSearch={() => props.history.push(`/`)}
    onAdd={() => props.history.push('/new')}
    translate={translate}
    searchTerm={props.searchTerm}
    notes={filterNotesBySearchTerm({ notes: getNotes(props.notes), searchTerm: props.searchTerm })}
  />
)

Notes.contextTypes = {
  t: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}

const mapStateToProps = ({ notes = notesInterface } = {}) => ({
  notes: notes.list,
})

const mapDispatchToPros = (dispatch) =>
  bindActionCreators(
    {
      setAutoSaveToggle: settingActions.setAutoSaveToggle,
      setDarkModeToggle: settingActions.setDarkModeToggle,
      setSaveAndCreateNewToggle: settingActions.setSaveAndCreateNewToggle,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToPros)(withRouter(Notes))
