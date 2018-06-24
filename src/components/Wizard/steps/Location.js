import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Column, Heading, Subhead } from 'rebass/emotion'

import LocationPicker from '~/components/LocationPicker'

export default class WizardLocationStep extends Component {
  static propTypes = {
    onDataChange: PropTypes.func.isRequired,
  }

  canGoToNextStep = data => !!data.location

  render() {
    return (
      <>
        <Row p={2}>
          <Column>
            <Heading>Lets get started!</Heading>
            <Subhead>SkipGuru is here to help you choose what to eat</Subhead>
          </Column>
        </Row>
        <Row p={2}>
          <Column>
            <LocationPicker onChange={location => this.props.onDataChange({ location })} />
          </Column>
        </Row>
      </>
    )
  }
}
