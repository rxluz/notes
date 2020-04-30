import React from 'react'
import { FiX } from 'react-icons/fi'
import { Tooltip } from 'react-tippy'

import './Chip.scss'

const displayRemoveIcon = ({ translate, onRemove }) => {
  const text = translate('Remove this tag', {}, 'Acessibility descriptio for delete icon')

  return (
    <Tooltip title={text} position="bottom" trigger="mouseenter">
      <i className="chip__icon animated fadeIn" onClick={onRemove}>
        <FiX size="15px" />
      </i>
    </Tooltip>
  )
}

const Chip = ({
  children,
  isRemovable = false,
  onRemove = () => {},
  translate = (text) => text,
} = {}) => {
  const [isHover, setIsHover] = React.useState(false)

  return (
    <div
      className={`chip chip__state--${isHover ? 'active' : 'default'}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
      {isHover && isRemovable && displayRemoveIcon({ translate, onRemove })}
    </div>
  )
}

export default Chip
