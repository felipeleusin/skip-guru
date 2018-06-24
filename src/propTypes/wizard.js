import PropTypes from 'prop-types'

export const WizardData = PropTypes.shape({
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  cuisine: PropTypes.string,
  foodType: PropTypes.string,
})
