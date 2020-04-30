import React from 'react'

import { FiSearch, FiSettings, FiPlus } from 'react-icons/fi'
import { emptyFunc } from 'Common/utils/general.utils'
import Card from 'Common/components/card'

import Icon from 'Common/components/icon'

import './NotesInterface.scss'

const displayNotes = (notes) =>
  notes.map(
    (
      {
        uuid = '',
        isStarred = false,
        colour = 'default',
        title = '',
        dueDate = null,
        content = '',
        tags = [],
      },
      index,
    ) => (
      <Card
        key={index}
        isStarred={isStarred}
        colour={colour}
        title={title}
        dueDate={dueDate}
        content={content}
        tags={tags}
      />
    ),
  )

const displayNoNotes = ({ translate }) => (
  <div className="notes-interface__main-empty">
    <div className="notes-interface__main-empty-info">
      <img
        src={require('./no-notes.png')}
        alt={translate('An nonsense illustration from absurd.design', {}, 'image credits')}
      />
      <br />
      {translate("You don't have notes yet", {}, 'Notes interface')} <br />
      <a href="/">{translate('Create your first note', {}, 'image credits')}</a>
    </div>
  </div>
)

const displayNoResults = ({ translate, searchTerm }) => (
  <div className="notes-interface__main-empty">
    <div className="notes-interface__main-empty-info">
      <img
        src={require('./no-notes.png')}
        alt={translate('An nonsense illustration from absurd.design', {}, 'image credits')}
      />
      <br />
      {translate('No results for {searchTerm} ', { searchTerm }, 'Notes interface')} <br />
      <a href="/">{translate('Clear search', {}, 'image credits')}</a>
    </div>
  </div>
)

const renderEmptyState = ({ translate, searchTerm, isSearchMode }) =>
  isSearchMode ? displayNoResults({ translate, searchTerm }) : displayNoNotes({ translate })

const NotesInterface = ({
  notes = [],
  onAdd = emptyFunc,
  searchTerm,
  isSearchMode = false,
  onSettings = emptyFunc,
  onSearch = emptyFunc,
  translate = emptyFunc,
}) => {
  console.log(notes.length)
  return (
    <div className="notes-interface">
      <header className="notes-interface__header">
        <h1 className="notes-interface__header-title">{translate('My notes', '', 'page title')}</h1>

        <div className="notes-interface__header-options">
          <Icon
            onClick={onSearch}
            tip={translate('Search notes', '', 'button to return to all notes results')}
            addClass="notes-interface__header-option"
          >
            <FiSearch size="40px" />
          </Icon>
          <Icon
            onClick={onSettings}
            tip={translate('Settings', '', 'button to return to all notes results')}
            addClass="notes-interface__header-option"
          >
            <FiSettings size="40px" />
          </Icon>
        </div>
      </header>
      <main className="notes-interface__main">
        {notes.length > 0 && displayNotes(notes)}

        {notes.length === 0 && renderEmptyState({ translate, searchTerm })}
      </main>

      <footer className="note-interface__footer">
        <div className="note-interface__footer-float">
          <Icon
            tip={translate('Save and close', '', 'float button in add/edit interface')}
            isRound
            onClick={onAdd}
          >
            <FiPlus size="44px" />
          </Icon>
        </div>
      </footer>
    </div>
  )
}

export default NotesInterface
