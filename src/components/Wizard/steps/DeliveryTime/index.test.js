import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import DeliveryTimeStep from './index'

describe('<DeliveryTimeStep />', () => {
  describe('render', () => {
    test('renders the component', () => {
      const component = shallow(<DeliveryTimeStep />)

      expect(toJson(component)).toMatchSnapshot()
    })

    test('renders the component', () => {
      const component = shallow(<DeliveryTimeStep />)

      // BARF testing with SVG
    })
  })
})
