import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import I18n from 'redux-i18n'
import { translations } from './common/locales/translations'
import detectBrowserLanguage from 'detect-browser-language'

import configureStore from './configureStore'

import './index.css'
import Main from './modules/main'
import * as serviceWorker from './serviceWorker'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18n translations={translations} initialLang={detectBrowserLanguage()} fallbackLang="en">
        <HashRouter>
          <Main />
        </HashRouter>
      </I18n>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
