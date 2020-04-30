import React from 'react'
import { FiX, FiCheck } from 'react-icons/fi'
import { emptyFunc } from 'Common/utils/general.utils'

import TransparentInput from 'Common/components/transparentInput'

import Icon from 'Common/components/icon'

import './SearchInterface.scss'

const SearchInterface = ({ onSearch = emptyFunc, onClose = emptyFunc, translate = emptyFunc }) => {
  const [value, setValue] = React.useState('')

  return (
    <div className="search-interface">
      <header className="search-interface__header">
        <Icon
          onClick={onClose}
          tip={translate('Close this search', '', 'button to return to all searches results')}
          addClass="search-interface__header-close"
        >
          <FiX size="40px" />
        </Icon>
      </header>
      <main className="search-interface__main">
        <TransparentInput
          size="big"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onPressEnter={onSearch}
          shouldClearAfterEnter
          addClass="notes-interface__main-input"
          placeholder={translate(
            "Type what you're looking for and press enter",
            '',
            'Notes title placeholder',
          )}
        />
      </main>
      {value !== '' && (
        <footer className="search-interface__footer animated fadeIn">
          <div className="search-interface__footer-float">
            <Icon
              tip={translate('Search', '', 'float button in add/edit interface')}
              isRound
              onClick={onSearch}
            >
              <FiCheck size="44px" />
            </Icon>
          </div>
        </footer>
      )}
    </div>
  )
}

export default SearchInterface
