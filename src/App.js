import React from 'react'
import { Provider as ThemeProvider, Toolbar, Root, Text } from 'rebass/emotion'
import { Provider } from 'react-redux'

import theme from '~/theme'
import store from '~/store'

import Wizard from '~/components/Wizard'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Root css={{ height: '100vh' }}>
        <Toolbar bg="red" color="white">
          <Text fontWeight="bold">SkipGuru</Text>
        </Toolbar>
        <Wizard />
      </Root>
    </ThemeProvider>
  </Provider>
)

export default App
