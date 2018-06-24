import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Heading, ButtonOutline } from 'rebass/emotion'

import { WizardData } from '~/propTypes/wizard'

const priceRanges = [
  { label: 'up to 20$', value: 20 },
  { label: 'up to 30$', value: 30 },
  { label: 'up to 50$', value: 50 },
]

export default class WizardPriceRangeStep extends Component {
  static propTypes = {
    onDataChange: PropTypes.func.isRequired,
    data: WizardData.isRequired,
  }

  canGoToNextStep = data => !!data.priceRange

  render() {
    return (
      <>
        <Heading p={2}>How much are you willing to spend?</Heading>
        <Flex p={2} flexWrap="wrap" justifyContent="space-around">
          {priceRanges.map(({ label, value }) => (
            <ButtonOutline
              key={label}
              px={4}
              py={3}
              bg={this.props.data.priceRange === value ? 'blue' : 'white'}
              color={this.props.data.priceRange === value ? 'white' : 'blue'}
              onClick={() => this.props.onDataChange({ priceRange: value })}
            >
              {label}
            </ButtonOutline>
          ))}
        </Flex>
      </>
    )
  }
}
