import React from 'react'
import { FiX } from 'react-icons/fi'
import Tooltip from 'common/components/tooltip'

import { isMobileOrTablet } from 'common/utils/browser.utils'

import './Chip.scss'

const displayRemoveIcon = ({ translate, onRemove }) => {
  const text = translate('Remove this tag', {}, 'Accessibility description for delete icon')

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

  const displayRemovable = () => {
    if (isMobileOrTablet()) {
      return isRemovable
    }

    return isRemovable && isHover
  }

  return (
    <div
      className={`chip chip__state--${isHover ? 'active' : 'default'} chip__state--${
        displayRemovable() ? 'removable' : 'unremovable'
      } `}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
      {(isHover || isMobileOrTablet()) && isRemovable && displayRemoveIcon({ translate, onRemove })}
    </div>
  )
}

export default Chip
