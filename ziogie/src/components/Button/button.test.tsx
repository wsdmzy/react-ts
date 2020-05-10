import React from 'react';
import { render } from '@testing-library/react'
import Button from './button'


describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.queryByText('Nice')
    expect(element).toBeTruthy()
    expect(element).toBeInTheDocument()
    expect(element?.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
  })
  it('should render the correct component based on different props', () => {

  })
})
