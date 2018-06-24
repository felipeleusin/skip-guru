import React from 'react'
import { Provider as ThemeProvider, Toolbar, Root, Text } from 'rebass/emotion'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import theme from '~/theme'
import store from '~/store'

import Wizard from '~/pages/Wizard'
import Options from '~/pages/Options'
import Order from './pages/Order'

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Root css={{ height: '100vh' }}>
          <Toolbar bg="red" color="white">
            <Text fontWeight="bold">SkipGuru</Text>
          </Toolbar>
          <Route exact path="/" component={Wizard} />
          <Route path="/options" component={Options} />
          <Route path="/order" component={Order} />
        </Root>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
)

export default App
