import React from 'react'
import { Message, Text, Box, ButtonOutline } from 'rebass/emotion'
import { withRouter, RouteProps } from 'react-router-dom'
import { connect } from 'react-redux'

import { wizardSelector } from '~/reducers/wizard'
import { WizardData } from '~/propTypes/wizard'
import { cuisines } from '~/utils/cuisine'

const OrderHeader = ({ data, history }) => (
  <Message>
    <ButtonOutline color="white" onClick={() => history.go(-1)}>
      Go back
    </ButtonOutline>
    <Box flex="1 1 auto" ml={3}>
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
  </Message>
)

OrderHeader.propTypes = {
  data: WizardData.isRequired,
  ...RouteProps,
}
export default connect(
  wizardSelector,
  null,
)(withRouter(OrderHeader))
