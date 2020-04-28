import React from 'react'
import TransparentInput from './TransparentInput'
import { action } from '@storybook/addon-actions'
import { Light, Dark } from 'Common/utils/storybookMode'

import 'react-tippy/dist/tippy.css'

export default { title: 'TransparentInput' }

const input = { value: '', value2: 'hello', empty: '' }

const changeValue = (event) => {
  input.value = `${input.value}${event.target.value}`
  action('changeValue')(event)
}
export const transparentInput = () => (
  <Light>
    <TransparentInput
      placeholder="Hello world"
      value={input.value2}
      onChange={changeValue}
      onPressEnter={action('onPressEnter')}
    />
  </Light>
)

export const transparentInputWithValue = () => (
  <Light>
    <TransparentInput
      placeholder="Hello world"
      value={input.empty}
      onChange={changeValue}
      onPressEnter={action('onPressEnter')}
    />
  </Light>
)

export const transparentInputDark = () => (
  <Dark>
    <TransparentInput
      placeholder="Hello world"
      value={input.value2}
      onChange={changeValue}
      onPressEnter={action('onPressEnter')}
    />
  </Dark>
)

export const transparentInputWithValueDark = () => (
  <Dark>
    <TransparentInput
      placeholder="Hello world"
      value={input.value}
      onChange={changeValue}
      onPressEnter={action('onPressEnter')}
    />
  </Dark>
)

export const transparentInputMedium = () => (
  <Light>
    <TransparentInput
      placeholder="Hello world"
      size="medium"
      value={input.value2}
      onChange={changeValue}
      onPressEnter={action('onPressEnter')}
    />
  </Light>
)

export const transparentInputWithValueMedium = () => (
  <Light>
    <TransparentInput
      placeholder="Hello world"
      size="medium"
      value={input.empty}
      onChange={changeValue}
      onPressEnter={action('onPressEnter')}
    />
  </Light>
)

export const transparentInputDarkMedium = () => (
  <Dark>
    <TransparentInput
      placeholder="Hello world"
      size="medium"
      value={input.value2}
      onChange={changeValue}
      onPressEnter={action('onPressEnter')}
    />
  </Dark>
)

export const transparentInputWithValueDarkMedium = () => (
  <Dark>
    <TransparentInput
      placeholder="Hello world"
      size="medium"
      value={input.value}
      onChange={changeValue}
      onPressEnter={action('onPressEnter')}
    />
  </Dark>
)

export const transparentInputBig = () => (
  <Light>
    <TransparentInput
      placeholder="Hello world"
      size="big"
      value={input.value2}
      onChange={changeValue}
      onPressEnter={action('onPressEnter')}
    />
  </Light>
)

export const transparentInputWithValueBig = () => (
  <Light>
    <TransparentInput
      placeholder="Hello world"
      size="big"
      value={input.empty}
      onChange={changeValue}
      onPressEnter={action('onPressEnter')}
    />
  </Light>
)

export const transparentInputDarkBig = () => (
  <Dark>
    <TransparentInput
      placeholder="Hello world"
      size="big"
      value={input.value2}
      onChange={changeValue}
      onPressEnter={action('onPressEnter')}
    />
  </Dark>
)

export const transparentInputWithValueDarkBig = () => (
  <Dark>
    <TransparentInput
      placeholder="Hello world"
      size="big"
      value={input.empty}
      onChange={changeValue}
      onPressEnter={action('onPressEnter')}
    />
  </Dark>
)
