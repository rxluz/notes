import React from 'react'
import { FiX, FiStar, FiTrash, FiInfo, FiCheck } from 'react-icons/fi'
import { emptyFunc } from 'Common/utils/general.utils'
import { hotkeys } from 'react-keyboard-shortcuts'

import TransparentInput from 'Common/components/transparentInput'
import IconTextSwitch from 'Common/components/iconTextSwitch'
import Icon from 'Common/components/icon'

import ChipsDisplay from 'Common/components/chipsDisplay'
import Chip from 'Common/components/chip'

import ColourSwitch from 'Common/components/colourSwitch'

import './NoteInterface.scss'

const generateTagsList = ({ tags, onRemoveTag }) =>
  tags.map((tag, index) => (
    <Chip onRemove={onRemoveTag} isRemovable key={index}>
      {tag}
    </Chip>
  ))

class NoteInterface extends React.PureComponent {
  hot_keys = {
    'shift+enter': {
      // combo from mousetrap
      priority: 1,
      handler: this.props.onSave,
    },
  }

  render() {
    const {
      uuid = '',
      title = '',
      onChangeTitle = emptyFunc,
      description = '',
      onChangeDescription = emptyFunc,
      tags = [],
      colour = 'default',
      onChangeColour = emptyFunc,
      scheduleOptions = [],
      isScheduled = false,
      onSchedule = emptyFunc,
      isPinned = false,
      onPin = emptyFunc,
      onDelete = emptyFunc,
      onInfo = emptyFunc,
      onRemoveTag = emptyFunc,
      onAddTag = emptyFunc,
      onSaveAndClose = emptyFunc,
      onClose = emptyFunc,
      translate = emptyFunc,
    } = this.props

    return (
      <div className="note-interface">
        <header className="note-interface__header">
          <TransparentInput
            size="big"
            value={title}
            onChange={onChangeTitle}
            addClass="note-interface__header-input"
            placeholder={translate('Add your note title here', '', 'Note title placeholder')}
          />

          <Icon
            onClick={onClose}
            tip={translate('Close this note', '', 'button to return to all notes')}
            addClass="note-interface__header-close"
          >
            <FiX size="40px" />
          </Icon>
        </header>
        <main className="note-interface__main">
          <section className="note-interface__main-tags">
            <TransparentInput
              size="small"
              onPressEnter={onAddTag}
              shouldClearAfterEnter
              addClass="note-interface__main-tags-input"
              placeholder={translate('Add tags', '', 'Note title placeholder')}
            />

            <ChipsDisplay width="calc(100% - 160px)" addClass="note-interface__main-tags-list">
              {generateTagsList({ tags, onRemoveTag })}
            </ChipsDisplay>
          </section>
          <section className="note-interface__main-description">
            <TransparentInput
              size="medium"
              isMultiLine
              rows={10}
              value={description}
              onChange={onChangeDescription}
              addClass="note-interface__main-description-input"
              placeholder={translate(
                'Add your content here and press shift+enter to save to add and start a new',
                '',
                'Note title placeholder',
              )}
            />
          </section>
        </main>
        <footer className="note-interface__footer">
          <div className="note-interface__footer-options">
            <ColourSwitch
              onChange={onChangeColour}
              selected={colour}
              addClass="note-interface__footer-option"
            />
            <IconTextSwitch
              tip={translate('Set expire date', {}, 'button to add an expiration date to the note')}
              isActive={isScheduled}
              addClass="note-interface__footer-option"
              options={scheduleOptions}
              onChange={onSchedule}
            />

            <Icon
              tip={translate('Star this note', '', 'float button in add/edit interface')}
              isActive={isPinned}
              onClick={onPin}
              addClass="note-interface__footer-option"
            >
              <FiStar size="22px" />
            </Icon>

            <Icon
              tip={translate('Delete this note', '', 'float button in add/edit interface')}
              onClick={() => onDelete(uuid)}
              addClass="note-interface__footer-option"
            >
              <FiTrash size="22px" />
            </Icon>

            <Icon
              tip={translate('Show keyboard shortcuts', '', 'float button in add/edit interface')}
              onClick={onInfo}
              addClass="note-interface__footer-option"
            >
              <FiInfo size="22px" />
            </Icon>
          </div>

          <div className="note-interface__footer-float">
            <Icon
              tip={translate('Save and close', '', 'float button in add/edit interface')}
              isRound
              onClick={onSaveAndClose}
            >
              <FiCheck size="44px" />
            </Icon>
          </div>
        </footer>
      </div>
    )
  }
}

export default hotkeys(NoteInterface)
