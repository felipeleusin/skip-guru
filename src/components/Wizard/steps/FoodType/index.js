import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Row, Column, Heading } from 'rebass/emotion'

import IconButton from '~/components/IconButton'

import SushiIcon from '~/assets/icons/sushi.svg'
import BurgerIcon from '~/assets/icons/hamburguer.svg'

const foodTypes = [
  { type: 'sushi', label: 'Sushi', icon: SushiIcon },
  { type: 'burguer', label: 'Burguer', icon: BurgerIcon },
]

export default class WizardFoodTypeStep extends Component {
  static propTypes = {
    onDataChange: PropTypes.func.isRequired,
  }

  canGoToNextStep = data => !!data.foodType

  handleFoodType = type => {
    this.props.onDataChange({ foodType: type })
  }

  render() {
    return (
      <>
        <Row p={2}>
          <Column>
            <Heading>What kind of food do you want to eat?</Heading>
          </Column>
        </Row>
        <Flex p={2} flexWrap="wrap" justifyContent="space-around">
          {foodTypes.map(({ icon, type, label }) => (
            <IconButton
              key={type}
              icon={icon}
              label={label}
              type={type}
              selected={this.props.data.foodType === type}
              onClick={this.handleFoodType}
            />
          ))}
        </Flex>
      </>
    )
  }
}
