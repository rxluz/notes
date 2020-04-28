import React from 'react'
import { render } from '@testing-library/react'
import KeyShortcutInfo from './KeyShortcutInfo'

test('renders the keys inside the element', () => {
  const { getByText } = render(
    <KeyShortcutInfo keys={['control', 'command', 'meta']} description="do something cool" />,
  )

  const linkElement = getByText(/command/i)
  expect(linkElement).toBeInTheDocument()
})
