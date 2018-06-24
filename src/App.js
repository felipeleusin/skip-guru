import React from 'react'
import { Provider as ThemeProvider, Toolbar, Root, Text } from 'rebass/emotion'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import theme from '~/theme'
import store from '~/store'

import Wizard from '~/pages/Wizard'

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Root css={{ height: '100vh' }}>
          <Toolbar bg="red" color="white">
            <Text fontWeight="bold">SkipGuru</Text>
          </Toolbar>
          <Route exact path="/" component={Wizard} />
        </Root>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
)

export default App
