import React from 'react'
import { FiX, FiStar, FiTrash, FiInfo, FiCheck, FiSettings, FiShare } from 'react-icons/fi'

import { isEmpty } from 'lodash'
import { hotkeys } from 'react-keyboard-shortcuts'

import { isMobileOrTablet, isShareAvailable, share } from 'Common/utils/browser.utils'

import TransparentInput from 'Common/components/transparentInput'
import Icon from 'Common/components/icon'
import ChipsDisplay from 'Common/components/chipsDisplay'
import Chip from 'Common/components/chip'
import ColourSwitch from 'Common/components/colourSwitch'

import { noteInterface } from './note.interface'

import './NotePage.scss'

const generateTagsList = ({ tags, onRemoveTag }) =>
  tags.map((tag, index) => (
    <Chip onRemove={() => onRemoveTag(tag)} isRemovable key={index}>
      {tag}
    </Chip>
  ))

const isValidNote = ({ title, content }) => !isEmpty(title) || !isEmpty(content)

class NotePage extends React.PureComponent {
  hot_keys = {
    'shift+enter': {
      // combo from mousetrap
      priority: 1,
      handler: this.props.onSave,
    },
  }

  render() {
    const { props = noteInterface } = this

    return (
      <div className="note-interface">
        <header className="note-interface__header">
          <TransparentInput
            id="title"
            key="title"
            size="big"
            value={props.title}
            onChange={props.onChangeTitle}
            addClass="note-interface__header-input"
            placeholder={
              isMobileOrTablet()
                ? props.translate('Title', '', 'Note title placeholder')
                : props.translate('Add your note title here', '', 'Note title placeholder')
            }
          />

          <button
            onClick={props.onClose}
            aria-label={props.translate('Close this note', '', 'button to return to all notes')}
            className="note-interface__header-close"
          >
            <FiX size="32px" />
          </button>
        </header>
        <main className="note-interface__main">
          <section className="note-interface__main-tags">
            <TransparentInput
              id="tag"
              key="tags"
              size="small"
              onPressEnter={props.onAddTag}
              shouldClearAfterEnter
              addClass="note-interface__main-tags-input"
              placeholder={props.translate('Add tags', '', 'Note title placeholder')}
            />
            <ChipsDisplay
              width={`${isMobileOrTablet() ? '100%' : 'calc(100% - 160px)'}`}
              addClass="note-interface__main-tags-list"
            >
              {generateTagsList({ tags: props.tags, onRemoveTag: props.onRemoveTag })}
            </ChipsDisplay>
          </section>
          <section className="note-interface__main-description">
            <TransparentInput
              id="content"
              size="medium"
              isMultiLine
              rows={isMobileOrTablet() ? 5 : 10}
              value={props.content}
              onChange={props.onChangeContent}
              addClass="note-interface__main-description-input"
              placeholder={
                isMobileOrTablet()
                  ? props.translate('Note content', '', 'Note title placeholder')
                  : props.translate(
                      'Add your content here and press shift+enter to save to add and start a new',
                      '',
                      'Note title placeholder',
                    )
              }
            />
          </section>
        </main>
        <footer className="note-interface__footer">
          <div className="note-interface__footer-options">
            <ColourSwitch
              onChange={props.onChangeColour}
              selected={props.colour}
              addClass="note-interface__footer-option"
            />

            <Icon
              tip={props.translate('Star this note', '', 'float button in add/edit interface')}
              isActive={props.isPinned}
              onClick={props.onPin}
              addClass="note-interface__footer-option"
            >
              <FiStar size="22px" />
            </Icon>

            <Icon
              tip={props.translate('Delete this note', '', 'float button in add/edit interface')}
              onClick={() => props.onDelete(props.uuid)}
              addClass="note-interface__footer-option"
            >
              <FiTrash size="22px" />
            </Icon>

            {!isMobileOrTablet() && (
              <Icon
                tip={props.translate(
                  'Show keyboard shortcuts',
                  '',
                  'float button in add/edit interface',
                )}
                onClick={props.onInfo}
                addClass="note-interface__footer-option"
              >
                <FiInfo size="22px" />
              </Icon>
            )}

            {isMobileOrTablet() && isShareAvailable() && (
              <Icon
                tip={props.translate('Share note', '', 'float button in add/edit interface')}
                onClick={() =>
                  share({ title: props.title, text: `${props.title} --- ${props.content}` })
                }
                addClass="note-interface__footer-option"
              >
                <FiShare size="22px" />
              </Icon>
            )}

            <Icon
              tip={props.translate('Settings', '', 'float button in add/edit interface')}
              onClick={props.onSettings}
              addClass="note-interface__footer-option"
            >
              <FiSettings size="22px" />
            </Icon>
          </div>

          {isValidNote({ title: props.title, content: props.content }) && (
            <div className="note-interface__footer-float animated fadeIn">
              <Icon
                tip={props.translate('Save and close', '', 'float button in add/edit interface')}
                isRound
                onClick={props.onSaveAndClose}
              >
                <FiCheck size="44px" />
              </Icon>
            </div>
          )}
        </footer>
      </div>
    )
  }
}

export default hotkeys(NotePage)
