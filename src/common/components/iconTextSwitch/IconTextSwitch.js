import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import Icon from 'Common/components/icon'
import IconTextSwitchItem from './IconTextSwitchItem'

import './IconTextSwitch.scss'

const closeAndCallOnChange = ({ setIsSelectorOpen, onChange }) => (params) => {
  onChange(params)
  setIsSelectorOpen(false)
}

const displayTextOptions = ({ translate, onChange, options, setIsSelectorOpen }) => (
  <div className={`icon-text-switch__items animated fadeIn`}>
    {options.map(({ text, value }) => (
      <IconTextSwitchItem
        key={value}
        onClick={closeAndCallOnChange({ onChange, setIsSelectorOpen })}
        text={text}
        value={value}
      />
    ))}
  </div>
)

const IconTextSwitch = ({
  options = [],
  isActive = false,
  onChange = () => {},
  translate = (text) => text,
} = {}) => {
  const [isSelectorOpen, setIsSelectorOpen] = React.useState(false)

  return (
    <div className={`icon-text-switch`}>
      {isSelectorOpen && displayTextOptions({ translate, onChange, options, setIsSelectorOpen })}

      <div onClick={() => setIsSelectorOpen(!isSelectorOpen)}>
        <Icon isActive={isActive}>
          <FiCalendar />
        </Icon>
      </div>
    </div>
  )
}

export default IconTextSwitch
