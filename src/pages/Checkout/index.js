import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Fixed, Button, Text, Absolute } from 'rebass/emotion'
import { connect } from 'react-redux'
import { RouteProps } from 'react-router-dom'

import OrderHeader from '~/components/OrderHeader'
import PriceText from '~/components/PriceText'
import ProgressDonut from '~/components/ProgressDonut'

import { orderSelector, clearOrder } from '~/reducers/order'

class CheckoutPage extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    ...RouteProps,
  }

  state = { isProcessing: false }

  handleOrderPayment = () => {
    this.setState({ isProcessing: true })
    setTimeout(() => {
      this.props.clearOrder()
      this.props.history.push('/receipt')
    }, Math.floor(Math.random() * 5) + 300)
  }

  render() {
    const { items, total, quantities } = this.props
    const { isProcessing } = this.state

    return (
      <Flex flexDirection="column">
        <OrderHeader />
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
        {items.map(item => (
          <Box p={2} key={item.id} flexDirection="row">
            <Text>{item.title}</Text>
            {quantities[item.id]}x <PriceText>{item.price}</PriceText>
          </Box>
        ))}
        <Box p={2}>
          <Text fontWeight="strong">Total: </Text>
          <PriceText>{total}</PriceText>
        </Box>

        <Box pd={2}>
          <Button color="red" onClick={this.handleOrderPayment}>
            Pay my order!
          </Button>
        </Box>
      </Flex>
    )
  }
}

export default connect(
  orderSelector,
  { clearOrder },
)(CheckoutPage)
