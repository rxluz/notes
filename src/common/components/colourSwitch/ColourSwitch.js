import React from 'react'
import COLOURS from 'Common/utils/colours.constants'

import ColourSwitchItem from './ColourSwitchItem'

import './ColourSwitch.scss'

const displayColorOptions = ({ translate, onChange }) => (
  <div className={`colour-switch__items animated fadeIn`}>
    {COLOURS.map((color) => (
      <ColourSwitchItem onClick={onChange} colour={color} />
    ))}
  </div>
)

const ColourSwitch = ({
  selected = 'default',
  onChange = () => {},
  translate = (text) => text,
} = {}) => {
  const [isSelectorOpen, setIsSelectorOpen] = React.useState(false)

  return (
    <div className={`colour-switch`}>
      {isSelectorOpen && displayColorOptions({ translate, onChange })}

      <ColourSwitchItem
        tip={translate('Change note color', {}, 'link to display all tags added')}
        onClick={() => setIsSelectorOpen(!isSelectorOpen)}
        colour={selected}
      />
    </div>
  )
}

export default ColourSwitch