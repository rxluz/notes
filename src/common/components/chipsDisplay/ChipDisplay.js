import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Tooltip } from 'react-tippy'

import './ChipDisplay.scss'

const getTotaChildrenlWidth = (componentID) => {
  const children = document.getElementById(componentID).children

  let total = 0

  children.forEach((child) => {
    total = total + child.offsetWidth
  })

  return total
}

const shouldDisplayMoreWarning = ({ componentID }) => {
  const totalChipDisplayWidth = document.getElementById(componentID).offsetWidth
  const totalChildrenWidth = getTotaChildrenlWidth(componentID)

  return totalChipDisplayWidth - 50 < totalChildrenWidth
}

const getTotalHidden = ({ componentID, setShowAllItems, translate }) => {
  console.log({ componentID })

  const totalChipDisplayWidth = document.getElementById(componentID).offsetWidth
  const children = document.getElementById(componentID).children

  let totalItems = children.length
  let totalVisibleItems = 0

  let total = 0

  children.forEach((child) => {
    if (totalChipDisplayWidth > total) {
      total = total + child.offsetWidth
      totalVisibleItems++
    }
  })

  const totalHiddenItems = totalItems - totalVisibleItems

  return (
    totalHiddenItems > 0 && (
      <div className="chipdisplay__info" onClick={() => setShowAllItems(true)}>
        <Tooltip
          title={translate('Show all tags', {}, 'link to display all tags added')}
          position="bottom"
          trigger="mouseenter"
        >
          +{totalHiddenItems}
        </Tooltip>
      </div>
    )
  )
}

const displayAllOrTotal = ({ showAllItems, translate, componentID, setShowAllItems }) =>
  showAllItems ? (
    <div class="chipdisplay__info" onClick={() => setShowAllItems(false)}>
      {translate('Less', {}, 'collapse chips display to one line')}
    </div>
  ) : (
    getTotalHidden({ componentID, setShowAllItems, translate })
  )

const componentID = uuidv4()

const ChipDisplay = ({ children, width = '500px', translate = (text) => text } = {}) => {
  const [renderTotalHiddenInfo, setRenderTotalHiddenInfo] = React.useState(false)
  const [showAllItems, setShowAllItems] = React.useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!renderTotalHiddenInfo && shouldDisplayMoreWarning({ componentID, translate })) {
      setRenderTotalHiddenInfo(true)
    }
  })

  return (
    <div
      id={componentID}
      className="chipdisplay"
      style={{ width, height: showAllItems ? ' auto' : '35px' }}
    >
      {children}

      {renderTotalHiddenInfo &&
        displayAllOrTotal({ showAllItems, translate, componentID, setShowAllItems })}
    </div>
  )
}

export default ChipDisplay
