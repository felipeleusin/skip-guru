/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer, createMatchers } from 'jest-emotion'
import * as emotion from 'emotion'

expect.extend(createMatchers(emotion))
expect.addSnapshotSerializer(createSerializer(emotion))

Enzyme.configure({ adapter: new Adapter() })
