import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import PriceRangeStep from './index'

describe('<PriceRangeStep />', () => {
  describe('render', () => {
    test('renders the component', () => {
      const component = shallow(<PriceRangeStep />)

      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
