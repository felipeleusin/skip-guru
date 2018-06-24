import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Heading } from 'rebass/emotion'
import map from 'lodash/map'

import IconButton from '~/components/IconButton'

import { WizardData } from '~/propTypes/wizard'

import { cuisines } from '~/utils/cuisine'

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
        <Heading p={2}>Do you want an specific cuisine?</Heading>
        <Flex p={2} flexWrap="wrap" justifyContent="space-around">
          {map(cuisines, ({ icon, label }, type) => (
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
