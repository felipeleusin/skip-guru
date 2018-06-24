import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import CuisineStep from './index'

describe('<CuisineStep />', () => {
  describe('render', () => {
    test('renders the component', () => {
      const component = shallow(<CuisineStep />)

      expect(toJson(component)).toMatchSnapshot()
    })

    test('renders the component', () => {
      const component = shallow(<CuisineStep />)

      console.log(component)
    })
  })
})
