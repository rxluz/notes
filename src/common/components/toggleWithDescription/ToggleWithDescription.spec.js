import React from 'react'
import { render } from '@testing-library/react'
import ToggleWithDescription from './ToggleWithDescription'

test('renders hello world inside the toggle-with-description', () => {
  const { getByText } = render(
    <ToggleWithDescription
      title="Hello world"
      description="a more long description to check the available space"
    />,
  )
  const linkElement = getByText(/Hello/i)
  expect(linkElement).toBeInTheDocument()
})
