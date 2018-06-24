import React, { Component } from 'react'
import { Box, Button, Flex } from 'rebass/emotion'

import LocationStep from './steps/Location'
import FoodTypeStep from './steps/FoodType'

const steps = [LocationStep, FoodTypeStep]

const mockData = {
  location: { id: '1521521512', description: 'Skip the Dishes HQ' },
}

export default class OptionsWizard extends Component {
  state = { current: 1, data: mockData }

  setCurrentRef = ref => {
    this.currentStep = ref
  }

  handleDataChange = data => {
    this.setState(state => ({ data: { ...state.data, ...data } }))
  }

  handleNextClick = () => {
    if (this.state.current < steps.length - 1) {
      this.setState(state => ({ current: state.current + 1 }))
    }
  }

  render() {
    const { current, data } = this.state
    const Step = steps[current]

    return (
      <Flex flexDirection="column" css={{ height: '100vh' }} p={2}>
        <Step ref={this.setCurrentRef} data={data} onDataChange={this.handleDataChange} />

        <Box alignSelf="flex-end" mt={4}>
          <Button px={4} py={3} bg="red" onClick={this.handleNextClick}>
            Continue
          </Button>
        </Box>
      </Flex>
    )
  }
}
