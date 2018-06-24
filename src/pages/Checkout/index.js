import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Fixed, Button, Text, Absolute, Heading, Link } from 'rebass/emotion'
import { connect } from 'react-redux'
import { RouteProps } from 'react-router-dom'

import OrderHeader from '~/components/OrderHeader'
import PriceText from '~/components/PriceText'
import ProgressDonut from '~/components/ProgressDonut'
import EmptyOrder from '~/components/EmptyOrder'

import { orderSelector, clearOrder } from '~/reducers/order'

class CheckoutPage extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    ...RouteProps,
  }

  state = { isProcessing: false, isDone: false }

  handleOrderPayment = () => {
    this.setState({ isProcessing: true })
    setTimeout(() => {
      this.setState({ isDone: true, isProcessing: false })
    }, Math.floor(Math.random() * 5) + 300)
  }

  render() {
    const { items, total, quantities } = this.props
    const { isProcessing, isDone } = this.state

    if (items.length === 0) {
      return <EmptyOrder />
    }

    return (
      <Flex flexDirection="column">
        {isProcessing ? (
          <Fixed top={0} bottom={0} left={0} right={0}>
            <Absolute
              css={{ width: '100%', height: '100vh', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            />
            <Flex
              css={{ position: 'absolute', height: '100vh' }}
              width={1}
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <ProgressDonut />
              </Box>
            </Flex>
          </Fixed>
        ) : null}
        {!isDone ? (
          <>
            <OrderHeader />

            <Flex flexDirection="column" p={3}>
              <Heading>Your order</Heading>
              {items.map(item => (
                <Flex key={item.id} flexDirection="row">
                  <Text mr={2}>{item.title}</Text>
                  {quantities[item.id]}x <PriceText>{item.price}</PriceText>
                </Flex>
              ))}
              <Flex flexDirection="row">
                <Text mr={2}>Total: </Text>
                <PriceText fontWeight="bold">{total}</PriceText>
              </Flex>

              <Button
                bg="red"
                css={{ display: 'block', width: '100%' }}
                mt={2}
                px={5}
                py={4}
                onClick={this.handleOrderPayment}
              >
                Pay my order!
              </Button>
            </Flex>
          </>
        ) : (
          <Flex flexDirection="column" p={3}>
            <Heading color="red">Your order is on the way!</Heading>
            <Link href="https://www.skipthedishes.com/user/account/orders/">Follow my order</Link>
          </Flex>
        )}
      </Flex>
    )
  }
}

export default connect(
  orderSelector,
  { clearOrder },
)(CheckoutPage)
