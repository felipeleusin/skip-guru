import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'rebass/emotion'
import { connect } from 'react-redux'
import { RouteProps } from 'react-router-dom'

import OrderHeader from '~/components/OrderHeader'

import { confirmOrder, orderSelector } from '~/reducers/order'

class OrderPage extends Component {
  static propTypes = {
    confirmOrder: PropTypes.func.isRequired,
    ...RouteProps,
  }

  render() {
    return (
      <Flex flexDirection="column">
        <OrderHeader />
      </Flex>
    )
  }
}

export default connect(
  orderSelector,
  { confirmOrder },
)(OrderPage)
