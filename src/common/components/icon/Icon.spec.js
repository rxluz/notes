import React from 'react'
import { render } from '@testing-library/react'
import Chip from './Chip'

test('renders hello world inside the icon', () => {
  const { getByText } = render(<Chip>Hello world</Chip>)
  const linkElement = getByText(/Hello/i)
  expect(linkElement).toBeInTheDocument()
})
