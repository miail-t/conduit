import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './configStore'
import './index.css'

function render() {
  const App = require('./App').default
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()