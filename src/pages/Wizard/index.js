import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Flex, ButtonOutline } from 'rebass/emotion'
import { connect } from 'react-redux'
import { RouteProps } from 'react-router-dom'

import { updateWizard, wizardSelector } from '~/reducers/wizard'

import { WizardData } from '~/propTypes/wizard'

import LocationStep from './steps/Location'
import CuisineStep from './steps/Cuisine'
import PriceRange from './steps/PriceRange'
import DeliveryTime from './steps/DeliveryTime'

const steps = [LocationStep, CuisineStep, PriceRange, DeliveryTime]

class WizardPage extends Component {
  static propTypes = {
    updateWizard: PropTypes.func.isRequired,
    data: WizardData.isRequired,
    ...RouteProps,
  }

  state = { current: 3 }

  setCurrentRef = ref => {
    this.currentStep = ref
  }

  handleNextClick = () => {
    if (this.state.current < steps.length - 1) {
      this.setState(state => ({ current: state.current + 1 }))
    } else {
      this.props.history.push('/options')
    }
  }

  handlePreviousClick = () => {
    if (this.state.current > 0) {
      this.setState(state => ({ current: state.current - 1 }))
    }
  }

  render() {
    const { current } = this.state
    const { data, updateWizard } = this.props
    const Step = steps[current]

    return (
      <Flex flexDirection="column" p={2}>
        <Step ref={this.setCurrentRef} data={data} onDataChange={updateWizard} />

        <Flex flexDirection="row" justifyContent="space-between" mt={4}>
          <ButtonOutline
            px={4}
            py={3}
            border="red"
            color="red"
            disabled={current === 0}
            onClick={this.handlePreviousClick}
          >
            Back
          </ButtonOutline>
          <Button
            px={4}
            py={3}
            bg="red"
            disabled={!this.currentStep || !this.currentStep.canGoToNextStep(data)}
            onClick={this.handleNextClick}
          >
            {current === steps.length - 1 ? 'Show me!' : 'Continue'}
          </Button>
        </Flex>
      </Flex>
    )
  }
}

export default connect(
  wizardSelector,
  { updateWizard },
)(WizardPage)
