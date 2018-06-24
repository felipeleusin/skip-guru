import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { Text, ButtonTransparent } from 'rebass/emotion'

const IconWrapper = styled(ButtonTransparent)`
  &:hover {
    transform: scale(1.05);
  }
`

const IconButton = ({ icon: Icon, type, selected, label, onClick }) => (
  <IconWrapper w={128} bg={selected ? 'lightRed' : 'white'} onClick={() => onClick(type)}>
    <Icon width={128} />
    {label && <Text>{label}</Text>}
  </IconWrapper>
)

IconButton.propTypes = {
  type: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.func.isRequired,
}

IconButton.defaultProps = {
  selected: false,
  label: null,
}

export default IconButton
