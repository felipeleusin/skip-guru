import React from 'react'
import { Provider, Heading, Button, Root } from 'rebass/emotion'
import { Flex, Box } from 'grid-styled/emotion'

import theme from '~/theme'

const App = () => (
  <Provider theme={theme}>
    <Root>
      <Flex>
        <Box w={1 / 2}>
          <Heading>Oie</Heading>
        </Box>
        <Box w={1 / 2}>
          Alou!!! <Button>Click</Button>
        </Box>
      </Flex>
    </Root>
  </Provider>
)

export default App
