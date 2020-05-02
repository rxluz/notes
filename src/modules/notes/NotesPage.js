import React from 'react'
import { isEmpty } from 'lodash'
import { FiSearch, FiSettings, FiPlus } from 'react-icons/fi'
import { isMobileOrTablet } from 'common/utils/browser.utils'
import Card from 'common/components/card'
import Icon from 'common/components/icon'
import NoNotesImg from './no-notes.png'
import NoResultsImg from './no-results.png'
import { notesPageInterface } from './notes.interface'

import './NotesPage.scss'

const displayNotes = ({ notes, onOpenNote }) =>
  notes.map((note, index) => (
    <Card
      onClick={() => onOpenNote(note.uuid)}
      key={index}
      isStarred={note.isStarred}
      colour={note.colour}
      title={note.title}
      dueDate={note.dueDate}
      content={note.content}
      tags={note.tags}
    />
  ))

const displayNoNotes = ({ translate, onAdd }) => (
  <div className="notes-interface__main-empty">
    <div className="notes-interface__main-empty-info">
      <img
        src={NoNotesImg}
        alt={translate('An illustration from Ivan Haidutski', {}, 'image credits')}
      />
      <br />
      {translate("You don't have notes yet", {}, 'Notes interface')} <br />
      <button onClick={onAdd}>{translate('Create your first note', {}, 'image credits')} </button>
    </div>
  </div>
)

const displayNoResults = ({ translate, searchTerm, onClearSearch }) => (
  <div className="notes-interface__main-empty">
    <div className="notes-interface__main-empty-info">
      <img
        src={NoResultsImg}
        alt={translate('An illustration from Ivan Haidutski', {}, 'image credits')}
      />
      <br />
      {translate('No results for {searchTerm} ', { searchTerm }, 'Notes interface')} <br />
      <button onClick={onClearSearch}>{translate('Clear search', {}, 'image credits')}</button>
    </div>
  </div>
)

const displaySearchWarning = ({ translate, searchTerm, onClearSearch }) => (
  <div className="notes-interface__header-search">
    <div className="notes-interface__header-search-info">
      {translate("Displaying only results to '{searchTerm}'", { searchTerm }, 'Notes interface')}
      {!isMobileOrTablet() && (
        <button onClick={onClearSearch}>{translate('Clear search', {}, 'image credits')}</button>
      )}
    </div>
  </div>
)

const renderEmptyState = ({ translate, searchTerm, isSearchMode, onAdd, onClearSearch }) =>
  isEmpty(searchTerm)
    ? displayNoNotes({ translate, onAdd })
    : displayNoResults({ translate, searchTerm, onClearSearch })

const NotesPage = (props = notesPageInterface) => (
  <div className="notes-interface">
    <header
      className={`notes-interface__header ${
        !isEmpty(props.searchTerm) && 'notes-interface__header--search-enabled'
      }`}
    >
      <h1 className="notes-interface__header-title">
        {props.translate('My notes', '', 'page title')}
      </h1>

      <div className="notes-interface__header-options">
        <button
          onClick={props.onSearch}
          aria-label={props.translate('Search notes', '', 'button to return to all notes results')}
          className="notes-interface__header-option"
        >
          <FiSearch size="32px" />
        </button>
        <button
          onClick={props.onSettings}
          aria-label={props.translate('Settings', '', 'button to return to all notes results')}
          className="notes-interface__header-option"
        >
          <FiSettings size="32px" />
        </button>
      </div>

      {!isEmpty(props.searchTerm) &&
        displaySearchWarning({
          translate: props.translate,
          searchTerm: props.searchTerm,
          onClearSearch: props.onClearSearch,
        })}
    </header>
    <main className="notes-interface__main">
      {props.notes.length > 0 && displayNotes({ notes: props.notes, onOpenNote: props.onOpenNote })}

      {props.notes.length === 0 &&
        renderEmptyState({
          translate: props.translate,
          searchTerm: props.searchTerm,
          onAdd: props.onAdd,
          onClearSearch: props.onClearSearch,
        })}
    </main>

    <footer className="note-interface__footer">
      <div className="note-interface__footer-float">
        <Icon
          tip={props.translate('New note', '', 'float button in add/edit interface')}
          isRound
          onClick={props.onAdd}
        >
          <FiPlus size="44px" />
        </Icon>
      </div>
    </footer>
  </div>
)

export default NotesPage
