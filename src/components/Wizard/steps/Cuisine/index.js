import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Row, Column, Heading } from 'rebass/emotion'

import IconButton from '~/components/IconButton'

import { WizardData } from '~/propTypes/Wizard'

import SushiIcon from '~/assets/icons/sushi.svg'
import BurgerIcon from '~/assets/icons/hamburguer.svg'
import AvocadoIcon from '~/assets/icons/avocado.svg'

const cuisines = [
  { type: 'japanese', label: 'Japanese', icon: SushiIcon },
  { type: 'fastfood', label: 'FastFood', icon: BurgerIcon },
  { type: 'fitness', label: 'Fitness', icon: AvocadoIcon },
]

export default class WizardCuisineStep extends Component {
  static propTypes = {
    onDataChange: PropTypes.func.isRequired,
    data: WizardData.isRequired,
  }

  canGoToNextStep = () => true

  handleFoodType = type => {
    this.props.onDataChange({ cuisine: type })
  }

  render() {
    return (
      <>
        <Row p={2}>
          <Column>
            <Heading>Do you want an specific cuisine?</Heading>
          </Column>
        </Row>
        <Flex p={2} flexWrap="wrap" justifyContent="space-around">
          {cuisines.map(({ icon, type, label }) => (
            <IconButton
              key={type}
              icon={icon}
              label={label}
              type={type}
              selected={this.props.data.cuisine === type}
              onClick={this.handleFoodType}
            />
          ))}
        </Flex>
      </>
    )
  }
}
