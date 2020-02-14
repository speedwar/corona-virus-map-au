import React from 'react'
import { shallow } from 'enzyme'
import Demo from './Demo'

const setup = () => {
  const wrapper = shallow(<Demo />)
  return { wrapper }
}

describe('<Demo /> component', () => {
  it('renders component', () => {
    const wrapper = setup()
    expect(wrapper).toMatchSnapshot()
  })
})
