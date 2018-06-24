import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Text, Box, Button, BackgroundImage, Subhead } from 'rebass/emotion'
import { connect } from 'react-redux'
import { RouteProps } from 'react-router-dom'

import { addItem } from '~/reducers/order'

import ProgressDonut from '~/components/ProgressDonut'
import PriceText from '~/components/PriceText'
import OrderHeader from '~/components/OrderHeader'
import ItemCard from '~/components/ItemCard'

import { options } from '~/mocks/options'

class OptionsPage extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
    ...RouteProps,
  }

  state = { loading: true, options }

  componentDidMount() {
    // TODO: fetchOptions from API using our machine learning algorithm
    setTimeout(() => {
      this.setState({ loading: false })
    }, Math.floor(Math.random() * 5) + 600)
  }

  handleBeginOrder = item => {
    this.props.addItem({ item, clearOrder: true })
    this.props.history.push('/order')
  }

  render() {
    const { loading, options } = this.state

    return (
      <Flex flexDirection="column">
        <OrderHeader />

        {loading ? (
          <Box mx="auto" mt={4}>
            <ProgressDonut />
          </Box>
        ) : (
          <Flex mt={4} p={2} flexDirection="row" flexWrap="wrap">
            {options.map(item => (
              <Box width={[1, 1 / 3, 1 / 4]} key={item.id}>
                <ItemCard mr={3} mb={3}>
                  <BackgroundImage src={item.picture} />
                  <Subhead p={2}>{item.title}</Subhead>
                  <Flex flexDirection="row">
                    <Box flex="1 1 auto">
                      <PriceText fontWeight="bold">{item.price}</PriceText>
                      <Text>{item.restaurant.name}</Text>
                    </Box>
                    <Button bg="red" onClick={() => this.handleBeginOrder(item)}>
                      Order!
                    </Button>
                  </Flex>
                </ItemCard>
              </Box>
            ))}
          </Flex>
        )}
      </Flex>
    )
  }
}

export default connect(
  null,
  { addItem },
)(OptionsPage)
