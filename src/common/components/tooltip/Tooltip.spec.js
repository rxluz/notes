import React from 'react'
import { render } from '@testing-library/react'
import Tooltip from './Tooltip'

test('renders hello world inside the tip', () => {
  const { getByText } = render(<Tooltip title={'heyy'}>Hello world</Tooltip>)
  const linkElement = getByText(/Hello/i)
  expect(linkElement).toBeInTheDocument()
})
