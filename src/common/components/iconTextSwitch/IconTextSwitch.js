import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import Icon from 'Common/components/icon'
import IconTextSwitchItem from './IconTextSwitchItem'
import { Tooltip } from 'react-tippy'

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
  addClass = '',
  tip = '',
  translate = (text) => text,
} = {}) => {
  const [isSelectorOpen, setIsSelectorOpen] = React.useState(false)

  return (
    <div className={`icon-text-switch ${addClass}`}>
      {isSelectorOpen && displayTextOptions({ translate, onChange, options, setIsSelectorOpen })}

      <div onClick={() => setIsSelectorOpen(!isSelectorOpen)}>
        <Tooltip title={tip} position="bottom" trigger="mouseenter">
          <Icon isActive={isActive}>
            <FiCalendar size="22px" />
          </Icon>
        </Tooltip>
      </div>
    </div>
  )
}

export default IconTextSwitch
