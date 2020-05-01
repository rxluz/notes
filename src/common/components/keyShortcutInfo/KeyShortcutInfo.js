import React from 'react'
import { isMac } from 'Common/utils/os.utils'

import './KeyShortcutInfo.scss'

const setMetaKeyName = (key) => {
  if (key === 'meta') {
    return isMac() ? 'command' : 'control'
  }

  if (key === 'alt') {
    return isMac() ? 'option' : 'alt'
  }

  return key
}

const generateKeys = ({ keys }) =>
  keys.map((key) => (
    <kbd key={key} className="ksi__key">
      {setMetaKeyName(key)}
    </kbd>
  ))

const addPlusButton = (keyElements) => {
  const totalElements = keyElements.length

  const shouldAddElement = (index) => index + 1 < totalElements
  return keyElements.map((keyElement, index) => (
    <React.Fragment key={index}>
      {keyElement}
      {shouldAddElement(index) && <span className="ksi__divisor">+</span>}
    </React.Fragment>
  ))
}

const KeyShortcutInfo = ({ keys = [], description = '', addClass } = {}) => (
  <div className={`ksi ${addClass}`}>
    {addPlusButton(generateKeys({ keys }))} <div className="ksi__description">{description} </div>
  </div>
)

export default KeyShortcutInfo
