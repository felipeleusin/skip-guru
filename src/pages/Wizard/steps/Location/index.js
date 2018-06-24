import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Subhead } from 'rebass/emotion'

import LocationPicker from '~/components/LocationPicker'

export default class WizardLocationStep extends Component {
  static propTypes = {
    onDataChange: PropTypes.func.isRequired,
  }

  canGoToNextStep = data => !!data.location

  render() {
    return (
      <>
        <Box p={2}>
          <Heading>Lets get started!</Heading>
          <Subhead>SkipGuru is here to help you choose what to eat</Subhead>
        </Box>
        <Box p={2}>
          <LocationPicker onChange={location => this.props.onDataChange({ location })} />
        </Box>
      </>
    )
  }
}
