import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'rebass/emotion'

const PriceText = ({ children, ...props }) => <Text {...props}>CAD {children.toFixed(2)}</Text>

PriceText.propTypes = {
  children: PropTypes.number.isRequired,
}

export default PriceText
