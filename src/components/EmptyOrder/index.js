import React from 'react'
import { Flex, Link, Text, Heading } from 'rebass/emotion'

const EmptyOrder = () => (
    <Flex flexDirection="column">
      <Text align="center">
        <Heading mb={5}>Your order is empty!</Heading>

        <Link href="/">Begin again</Link>
      </Text>
    </Flex>
  )

export default EmptyOrder
