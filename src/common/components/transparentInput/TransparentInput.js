import React from 'react'

import './TransparentInput.scss'

const handleKeyDown = ({ onChange = () => {}, onPressEnter = () => {} } = {}) => (event) =>
  event.key === 'Enter' ? onPressEnter(event) : onChange(event)

const addIconElement = (IconElement) => !!IconElement && IconElement

const TransparentInput = ({
  placeholder = '',
  value = '',
  size = 'small',
  onChange = () => {},
  onPressEnter = () => {},
  IconElement = null,
} = {}) => (
  <div className="ti">
    {addIconElement(IconElement)}
    <input
      placeholder={placeholder}
      value={value}
      className={`ti__input ti__input--${size}`}
      onChange={handleKeyDown({ onChange, onPressEnter })}
    />
  </div>
)

export default TransparentInput
