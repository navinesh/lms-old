import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Main from './containers/main'
import configureStore from './stores/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('body content')
)
