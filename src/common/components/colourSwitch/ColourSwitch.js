import React from 'react'
import COLOURS from 'common/utils/colours.constants'

import ColourSwitchItem from './ColourSwitchItem'

import './ColourSwitch.scss'

const closeAndOnChange = ({ setIsSelectorOpen, onChange }) => (event) => {
  setIsSelectorOpen(false)
  onChange(event)
}
const displayColorOptions = ({ translate, onChange, setIsSelectorOpen }) => (
  <div className={`colour-switch__items animated fadeIn`}>
    {COLOURS.map((color) => (
      <ColourSwitchItem
        onClick={closeAndOnChange({ setIsSelectorOpen, onChange })}
        colour={color}
      />
    ))}
  </div>
)

const ColourSwitch = ({
  selected = 'default',
  addClass = '',
  onChange = () => {},
  translate = (text) => text,
} = {}) => {
  const [isSelectorOpen, setIsSelectorOpen] = React.useState(false)

  return (
    <div className={`colour-switch ${addClass}`}>
      {isSelectorOpen && displayColorOptions({ translate, onChange, setIsSelectorOpen })}

      <ColourSwitchItem
        tip={translate('Change note color', {}, 'link to display all tags added')}
        onClick={() => setIsSelectorOpen(!isSelectorOpen)}
        colour={selected}
      />
    </div>
  )
}

export default ColourSwitch
