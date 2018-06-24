import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Flex,
  Box,
  BackgroundImage,
  Button,
  Text,
  Link,
  Input,
  Label,
  Heading,
  Subhead,
} from 'rebass/emotion'
import { connect } from 'react-redux'
import { RouteProps } from 'react-router-dom'

import OrderHeader from '~/components/OrderHeader'
import PriceText from '~/components/PriceText'
import ItemCard from '~/components/ItemCard'

import { updateItem, addItem, orderSelector } from '~/reducers/order'

import { options } from '~/mocks/options'

class OrderPage extends Component {
  static propTypes = {
    updateItem: PropTypes.func.isRequired,
    ...RouteProps,
  }

  state = { options }

  componentDidMount() {
    // Fetch other restaurant options from the API
  }

  handleItemQuantity = () => {
    console.log('bar')
  }

  render() {
    const { items, quantities } = this.props
    const item = items[0]

    if (!item) {
      return (
        <Flex flexDirection="column">
          <Text align="center">
            <Heading mb={5}>Your order is empty!</Heading>

            <Link href="/">Begin again</Link>
          </Text>
        </Flex>
      )
    }
    const { options } = this.state

    return (
      <Flex flexDirection="column">
        <OrderHeader />

        <Flex p={4} flexDirection="row">
          <img css={{ width: '128px', height: '128px' }} src={item.picture} alt={item.title} />
          <Box mx={4}>
            <Heading>{item.title}</Heading>
            <Subhead>
              <PriceText>{item.price}</PriceText>
            </Subhead>
            <div>
              <Label>Quantity</Label>
              <Input
                type="number"
                onChange={ev => this.props.updateItem({ item, quantity: ev.target.value })}
                value={quantities[item.id]}
              />
            </div>
          </Box>
        </Flex>
        <Flex p={4} flexDirection="column">
          <Heading>{item.restaurant.name}</Heading>
          <Subhead>You can also purchase:</Subhead>
          <Flex mt={3} flexDirection="row">
            {options.filter(item => !quantities[item.id]).map(item => (
              <Box width={[1, 1 / 3, 1 / 4]} key={item.id}>
                <ItemCard mr={3} mb={3}>
                  <BackgroundImage src={item.picture} />
                  <Subhead p={2}>{item.title}</Subhead>
                  <Flex flexDirection="row">
                    <Box flex="1 1 auto">
                      <PriceText fontWeight="bold">{item.price}</PriceText>
                    </Box>
                    <Button bg="red" onClick={() => this.props.addItem({ item })}>
                      Add to Order!
                    </Button>
                  </Flex>
                </ItemCard>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    )
  }
}

export default connect(
  orderSelector,
  { updateItem, addItem },
)(OrderPage)
