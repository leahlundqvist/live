import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { AppProvider } from './store/store'

import { App } from './components/app'

ReactDOM.render(
  <AppProvider>
    <App message={'Hello world'} />
  </AppProvider>,
  document.getElementById('app')
)
