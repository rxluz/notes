import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Tooltip from 'common/components/tooltip'

import './ChipDisplay.scss'

const getTotalChildrenWidth = (componentID) => {
  const children = document.getElementById(componentID).children

  let total = 0

  if (children.length > 0) {
    for (const index in children) {
      const child = children[index]
      if (typeof child.offsetWidth === 'number') {
        total = total + child.offsetWidth
      }
    }
  }

  return total
}

const shouldDisplayMoreWarning = ({ componentID }) => {
  const totalChipDisplayWidth = document.getElementById(componentID).offsetWidth
  const totalChildrenWidth = getTotalChildrenWidth(componentID)

  return totalChipDisplayWidth - 50 < totalChildrenWidth
}

const getTotalHidden = ({ showMore, componentID, setShowAllItems, translate }) => {
  const totalChipDisplayWidth = document.getElementById(componentID).offsetWidth
  const children = document.getElementById(componentID).children

  let totalItems = 0
  let totalVisibleItems = 0

  let total = 0

  for (const index in children) {
    const child = children[index]

    if (typeof child.offsetWidth === 'number' && !child.className.includes('chipdisplay__info')) {
      totalItems++
      const totalWithCurrentChild = total + child.offsetWidth + 10

      total = total + child.offsetWidth + 10

      if (totalChipDisplayWidth > totalWithCurrentChild) {
        totalVisibleItems++
      }
    }
  }

  console.log({ totalChipDisplayWidth, total, totalItems, totalVisibleItems, children })

  const totalHiddenItems = totalItems - totalVisibleItems

  const renderTotalItems = showMore ? (
    <Tooltip
      title={translate('Show all tags', {}, 'link to display all tags added')}
      position="bottom"
      trigger="mouseenter"
    >
      +{totalHiddenItems}
    </Tooltip>
  ) : (
    <>+{totalHiddenItems}</>
  )

  return (
    totalHiddenItems > 0 && (
      <div className="chipdisplay__info" onClick={() => showMore && setShowAllItems(true)}>
        {renderTotalItems}
      </div>
    )
  )
}

const displayAllOrTotal = ({ showMore, showAllItems, translate, componentID, setShowAllItems }) =>
  showAllItems ? (
    <div className="chipdisplay__info" onClick={() => setShowAllItems(false)}>
      {translate('Less', {}, 'collapse chips display to one line')}
    </div>
  ) : (
    getTotalHidden({ showMore, componentID, setShowAllItems, translate })
  )

const ChipDisplay = ({
  children,
  width = '500px',
  showMore = true,
  addClass = '',
  translate = (text) => text,
} = {}) => {
  const [renderTotalHiddenInfo, setRenderTotalHiddenInfo] = React.useState(false)
  const [componentID] = React.useState(uuidv4())
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
      className={`chipdisplay ${addClass}`}
      style={{ width, height: showAllItems ? ' auto' : '35px' }}
    >
      {children}

      {renderTotalHiddenInfo &&
        displayAllOrTotal({ showMore, showAllItems, translate, componentID, setShowAllItems })}
    </div>
  )
}

export default ChipDisplay
