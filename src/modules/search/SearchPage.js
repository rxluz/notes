import React from 'react'
import { FiX, FiCheck } from 'react-icons/fi'
import { isMobileOrTablet } from 'common/utils/browser.utils'
import TransparentInput from 'common/components/transparentInput'
import Icon from 'common/components/icon'

import { searchPageInterface } from './search.interface'

import './SearchPage.scss'

const SearchPage = (props = searchPageInterface) => {
  const [value, setValue] = React.useState('')

  return (
    <div className="search-interface">
      <header className="search-interface__header">
        <button
          onClick={props.onClose}
          aria-label={props.translate(
            'Close this search',
            '',
            'button to return to all searches results',
          )}
          className="search-interface__header-close"
        >
          <FiX size="32px" />
        </button>
      </header>
      <main className="search-interface__main">
        <TransparentInput
          size="big"
          autoFocus
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onPressEnter={() => props.onSearch(value)}
          shouldClearAfterEnter
          addClass="notes-interface__main-input"
          placeholder={
            isMobileOrTablet()
              ? props.translate('Search', '', 'Notes title placeholder')
              : props.translate(
                  "Type what you're looking for and press enter",
                  '',
                  'Notes title placeholder',
                )
          }
        />
      </main>
      {value !== '' && (
        <footer className="search-interface__footer animated fadeIn">
          <div className="search-interface__footer-float">
            <Icon
              tip={props.translate('Search', '', 'float button in add/edit interface')}
              isRound
              onClick={() => props.onSearch(value)}
            >
              <FiCheck size="44px" />
            </Icon>
          </div>
        </footer>
      )}
    </div>
  )
}

export default SearchPage
