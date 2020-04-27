import React from 'react'
import { render } from '@testing-library/react'
import IconTextSwitch from './IconTextSwitch'

test('renders colourSwitch with icon-text-switch class', () => {
  const { container } = render(<IconTextSwitch />)
  expect(container.firstChild.classList.contains('icon-text-switch')).toBe(true)
})
