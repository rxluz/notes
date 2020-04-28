import React from 'react'
import { isMac } from 'Common/utils/os.utils'

import './KeyShortcutInfo.scss'

const setMetaKeyName = () => (isMac() ? 'command' : 'control')

const setKeyName = (key) => (key === 'meta' ? setMetaKeyName(key) : key)

const generateKeys = ({ keys }) =>
  keys.map((key) => (
    <kbd key={key} className="ksi__key">
      {setKeyName(key)}
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

const KeyShortcutInfo = ({ keys = [], description = '' } = {}) => (
  <div className={`ksi`}>
    {addPlusButton(generateKeys({ keys }))} <div className="ksi__description">{description} </div>
  </div>
)

export default KeyShortcutInfo
