import React from 'react'
import { Provider as ThemeProvider, Toolbar, Root } from 'rebass/emotion'
import { Provider } from 'react-redux'

import theme from '~/theme'
import store from '~/store'

import Wizard from '~/components/Wizard'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Root>
        <Toolbar bg="red" color="white">
          SkipGuru
        </Toolbar>
        <Wizard />
      </Root>
    </ThemeProvider>
  </Provider>
)

export default App
