import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Heading, ButtonOutline } from 'rebass/emotion'

import { WizardData } from '~/propTypes/wizard'

const deliveryTimes = [
  { label: 'in 20 minutes', value: 20 },
  { label: 'in 40 minutes', value: 40 },
  { label: 'take your time', value: null },
]

export default class WizardDeliveryTimeStep extends Component {
  static propTypes = {
    onDataChange: PropTypes.func.isRequired,
    data: WizardData.isRequired,
  }

  canGoToNextStep = () => true

  render() {
    return (
      <>
        <Heading p={2}>How much are you willing to spend?</Heading>
        <Flex p={2} flexWrap="wrap" justifyContent="space-around">
          {deliveryTimes.map(({ label, value }) => (
            <ButtonOutline
              key={label}
              px={4}
              py={3}
              bg={this.props.data.deliveryTime === value ? 'blue' : 'white'}
              color={this.props.data.deliveryTime === value ? 'white' : 'blue'}
              onClick={() => this.props.onDataChange({ deliveryTime: value })}
            >
              {label}
            </ButtonOutline>
          ))}
        </Flex>
      </>
    )
  }
}
