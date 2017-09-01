'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import store from './store'
import Root from './components/Root'

ReactDOM.render (
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('main')
)