import React from 'react'
import { emptyFunc } from 'Common/utils/general.utils'

import './TransparentInput.scss'

const handleKeyDown = ({
  onPressEnter = emptyFunc,
  shouldClearAfterEnter = false,
  setInternalValue = emptyFunc,
} = {}) => (event) => {
  if (event.key === 'Enter') {
    onPressEnter(event)

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
  console.log({ event })
  if (isInternalControl) {
    setInternalValue(event.target.value)
  } else {
    onChange(event)
  }
}

const addIconElement = (IconElement) => !!IconElement && IconElement

const TransparentInput = ({
  placeholder = '',
  value = null,
  isMultiLine = false,
  rows = 1,
  size = 'small',
  addClass = '',
  onChange = emptyFunc,
  onPressEnter = emptyFunc,
  shouldClearAfterEnter = false,
  IconElement = null,
} = {}) => {
  const isInternalControl = value === null

  const [internalValue, setInternalValue] = React.useState('')

  const renderInputOrTextArea = () =>
    isMultiLine ? (
      <textarea
        placeholder={placeholder}
        rows={rows}
        value={isInternalControl ? internalValue : value}
        className={`ti__input ti__input--${size}`}
        onKeyDown={handleKeyDown({ onPressEnter, shouldClearAfterEnter, setInternalValue })}
        onChange={handleChange({ isInternalControl, setInternalValue, onChange })}
      />
    ) : (
      <input
        placeholder={placeholder}
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
    </div>
  )
}

export default TransparentInput
