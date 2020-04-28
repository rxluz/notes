import React from 'react'
import { render } from '@testing-library/react'
import TransparentInput from './TransparentInput'

test('renders hello world as value inside the transparentInput', () => {
  const { container } = render(<TransparentInput value="Hello world" />)
  expect(container.firstChild.classList.contains('ti')).toBe(true)
})
