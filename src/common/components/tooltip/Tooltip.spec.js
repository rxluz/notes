import React from 'common/components/tooltip/node_modules/react'
import { render } from 'common/components/tooltip/node_modules/@testing-library/react'
import Tooltip from './Tooltip'

test('renders hello world inside the chip', () => {
  const { getByText } = render(<Tooltip>Hello world</Tooltip>)
  const linkElement = getByText(/Hello/i)
  expect(linkElement).toBeInTheDocument()
})
