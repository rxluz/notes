import React from 'react'
import { isEmpty } from 'lodash'
import { emptyFunc } from 'common/utils/general.utils'
import { isMobileOrTablet } from 'common/utils/browser.utils'

import { FiCheck } from 'react-icons/fi'

import './TransparentInput.scss'

const handleKeyDown = ({
  onPressEnter = emptyFunc,
  shouldClearAfterEnter = false,
  setInternalValue = emptyFunc,
} = {}) => (event) => {
  if (event.key === 'Enter') {
    try {
      onPressEnter(event)
    } catch (e) {}

    if (shouldClearAfterEnter) {
      setInternalValue('')
    }
  }

  return true
}

const handleChange = ({
  onChange = emptyFunc,
  isInternalControl = false,
  setInternalValue = emptyFunc,
} = {}) => (event) => {
  if (isInternalControl) {
    setInternalValue(event.target.value)
  } else {
    onChange(event)
  }
}

const addIconElement = (IconElement) => !!IconElement && IconElement

const shouldDisplayConfirmOption = ({ onPressEnter, value }) =>
  isMobileOrTablet() && onPressEnter !== null && !isEmpty(value)

const addConfirmOption = ({ onPressEnter, value }) =>
  shouldDisplayConfirmOption({ onPressEnter, value }) && (
    <div onClick={onPressEnter} className="ti__input-confirm">
      <FiCheck size="20px" />
    </div>
  )

const addKeyboardClass = (id) => {
  document.body.classList.add('keyboard-open')
  if (!isEmpty(id)) {
    document.body.classList.add(`field-${id}-open`)
  }
}

const removeKeyboardClass = (id) => {
  document.body.classList.remove('keyboard-open')
  if (!isEmpty(id)) {
    document.body.classList.remove(`field-${id}-open`)
  }
}

const onFocus = ({ id }) => {
  if (isMobileOrTablet()) {
    addKeyboardClass(id)
  }
}
const onBlur = ({ event, onPressEnter, setInternalValue, id }) => {
  if (isMobileOrTablet()) {
    try {
      onPressEnter(event)
    } catch (e) {}
    setInternalValue('')
    removeKeyboardClass(id)
  }
}

const TransparentInput = ({
  id = '',
  placeholder = '',
  isMultiLine = false,
  value = undefined,
  autoFocus = false,
  rows = 1,
  size = 'small',
  addClass = '',
  onChange = emptyFunc,
  onPressEnter = null,
  shouldClearAfterEnter = false,
  IconElement = null,
} = {}) => {
  const isInternalControl = typeof value === 'undefined'

  const [internalValue, setInternalValue] = React.useState('')

  const renderInputOrTextArea = () =>
    isMultiLine ? (
      <textarea
        autoFocus={autoFocus}
        placeholder={placeholder}
        rows={rows}
        onFocus={() => onFocus({ id })}
        onBlur={(event) => onBlur({ event, id, onPressEnter, setInternalValue })}
        value={isInternalControl ? internalValue : value}
        className={`ti__input ti__input--${size}`}
        onKeyDown={handleKeyDown({ onPressEnter, shouldClearAfterEnter, setInternalValue })}
        onChange={handleChange({ isInternalControl, setInternalValue, onChange })}
      />
    ) : (
      <input
        autoFocus={autoFocus}
        placeholder={placeholder}
        onFocus={() => onFocus({ id })}
        onBlur={(event) => onBlur({ event, onPressEnter, setInternalValue, id })}
        value={isInternalControl ? internalValue : value}
        className={`ti__input ti__input--${size}`}
        onKeyDown={handleKeyDown({ onPressEnter, shouldClearAfterEnter, setInternalValue })}
        onChange={handleChange({ isInternalControl, setInternalValue, onChange })}
      />
    )

  return (
    <div className={`ti ${addClass}`}>
      {addIconElement(IconElement)}

      {renderInputOrTextArea()}

      {addConfirmOption({ onPressEnter, value: internalValue })}
    </div>
  )
}

export default TransparentInput
