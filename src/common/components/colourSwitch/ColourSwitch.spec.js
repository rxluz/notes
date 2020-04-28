import React from 'react'
import { render } from '@testing-library/react'
import ColourSwitch from './ColourSwitch'

test('renders colourSwitch with colour-switch class', () => {
  const { container } = render(<ColourSwitch />)
  expect(container.firstChild.classList.contains('colour-switch')).toBe(true)
})
