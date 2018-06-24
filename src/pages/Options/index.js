import React, { Component } from 'react'
import {
  Message,
  Flex,
  Text,
  Card,
  Box,
  Button,
  ButtonOutline,
  BackgroundImage,
  Subhead,
} from 'rebass/emotion'
import { connect } from 'react-redux'
import styled from 'react-emotion'
import { width } from 'styled-system'
import { RouteProps } from 'react-router-dom'

import { wizardSelector } from '~/reducers/wizard'

import { WizardData } from '~/propTypes/wizard'

import ProgressDonut from '~/components/ProgressDonut'

import { cuisines } from '~/utils/cuisine'
import PriceText from '~/components/PriceText'

const ItemCard = styled(Card)`
  ${width};
`

const options = [
  {
    id: '12512521',
    title: 'Good Burguer',
    price: 99,
    picture:
      'https://images.unsplash.com/photo-1529565214304-a882ebc5a8e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dbef105cc9d852a9cb4152123ea57eb2&auto=format&fit=crop&w=2250&q=80',
    description: 'Greatest Burguer',
    restaurant: { name: 'Burguer Joint' },
  },
  {
    id: '5252515',
    title: 'Good Burguer',
    price: 99,
    picture:
      'https://images.unsplash.com/photo-1529565214304-a882ebc5a8e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dbef105cc9d852a9cb4152123ea57eb2&auto=format&fit=crop&w=2250&q=80',
    description: 'Greatest Burguer',
    restaurant: { name: 'Burguer Joint' },
  },
  {
    id: '263463426',
    title: 'Good Burguer',
    price: 99,
    picture:
      'https://images.unsplash.com/photo-1529565214304-a882ebc5a8e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dbef105cc9d852a9cb4152123ea57eb2&auto=format&fit=crop&w=2250&q=80',
    description: 'Greatest Burguer',
    restaurant: { name: 'Burguer Joint' },
  },
  {
    id: '264363462',
    title: 'Good Burguer',
    price: 99,
    picture:
      'https://images.unsplash.com/photo-1529565214304-a882ebc5a8e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dbef105cc9d852a9cb4152123ea57eb2&auto=format&fit=crop&w=2250&q=80',
    description: 'Greatest Burguer',
    restaurant: { name: 'Burguer Joint' },
  },
  {
    id: '6326136',
    title: 'Good Burguer',
    price: 99,
    picture:
      'https://images.unsplash.com/photo-1529565214304-a882ebc5a8e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dbef105cc9d852a9cb4152123ea57eb2&auto=format&fit=crop&w=2250&q=80',
    description: 'Greatest Burguer',
    restaurant: { name: 'Burguer Joint' },
  },
  {
    id: '51251251',
    title: 'Good Burguer',
    price: 99,
    picture:
      'https://images.unsplash.com/photo-1529565214304-a882ebc5a8e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dbef105cc9d852a9cb4152123ea57eb2&auto=format&fit=crop&w=2250&q=80',
    description: 'Greatest Burguer',
    restaurant: { name: 'Burguer Joint' },
  },
]

class OrderOptions extends Component {
  static propTypes = {
    data: WizardData.isRequired,
    ...RouteProps,
  }

  state = { loading: true, options }

  componentDidMount() {
    // TODO: fetchOptions from API
    setTimeout(() => {
      this.setState({ loading: false })
    }, Math.floor(Math.random() * 5) + 300)
  }

  handleChangeMindClick = () => {
    this.props.history.push('/')
  }

  render() {
    const { data } = this.props
    const { loading, options } = this.state

    return (
      <Flex flexDirection="column">
        <Message>
          <Box flex="1 1 auto">
            <Text>
              <strong>Delivery to: </strong> {data.location.description}
            </Text>
            {data.cuisine && (
              <Text>
                <strong>Cuisine: </strong>
                {cuisines[data.cuisine].label}
              </Text>
            )}
          </Box>
          <ButtonOutline color="white" onClick={this.handleChangeMindClick} alignSelf="flex-end">
            Changed my mind!
          </ButtonOutline>
        </Message>

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
                    <Button bg="red">Order!</Button>
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

export default connect(wizardSelector)(OrderOptions)
