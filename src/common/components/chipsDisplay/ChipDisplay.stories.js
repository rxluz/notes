import React from 'react'
import ChipDisplay from './ChipDisplay'
import Chip from 'Common/components/chip/Chip'
import { action } from '@storybook/addon-actions'
import 'react-tippy/dist/tippy.css'
import { Light, Dark } from 'Common/utils/storybookMode'

export default { title: 'Chip Display' }

const chipLong = (
  <ChipDisplay>
    <Chip>Hello world</Chip>
    <Chip>Hello world this is a very big content</Chip>
    <Chip isRemovable onRemove={action('Remove action')}>
      This is isRemovable
    </Chip>
    <Chip>Hello world II</Chip>
    <Chip>Hello hoauau</Chip>
    <Chip>Hello world much big</Chip>
    <Chip>Hello world</Chip>
    <Chip>Hello world this is a very big content</Chip>
    <Chip isRemovable onRemove={action('Remove action')}>
      This is isRemovable
    </Chip>
    <Chip>Hello world II</Chip>
    <Chip>Hello hoauau</Chip>
    <Chip>Hello world much big</Chip>
    <Chip>Hello world</Chip>
    <Chip>Hello world this is a very big content</Chip>
    <Chip isRemovable onRemove={action('Remove action')}>
      This is isRemovable
    </Chip>
    <Chip>Hello world II</Chip>
    <Chip>Hello hoauau</Chip>
    <Chip>Hello world much big</Chip>
    <Chip>Hello world</Chip>
    <Chip>Hello world this is a very big content</Chip>
    <Chip isRemovable onRemove={action('Remove action')}>
      This is isRemovable
    </Chip>
    <Chip>Hello world II</Chip>
    <Chip>Hello hoauau</Chip>
    <Chip>Hello world much big</Chip>
    <Chip>Hello world</Chip>
    <Chip>Hello world this is a very big content</Chip>
    <Chip isRemovable onRemove={action('Remove action')}>
      This is isRemovable
    </Chip>
    <Chip>Hello world II</Chip>
    <Chip>Hello hoauau</Chip>
    <Chip>Hello world much big</Chip>
    <Chip>Hello world</Chip>
    <Chip>Hello world this is a very big content</Chip>
    <Chip isRemovable onRemove={action('Remove action')}>
      This is isRemovable
    </Chip>
    <Chip>Hello world II</Chip>
    <Chip>Hello hoauau</Chip>
    <Chip>Hello world much big</Chip>
  </ChipDisplay>
)

const chipShort = (
  <ChipDisplay>
    <Chip>Hello world</Chip>
    <Chip>Hello world this is a very big content</Chip>
    <Chip isRemovable onRemove={action('Remove action')}>
      This is isRemovable
    </Chip>
  </ChipDisplay>
)

export const chipLongDisplayDefault = () => <Light>{chipLong}</Light>
export const chipShortDisplayDefault = () => <Light>{chipShort}</Light>

export const chipShortDisplayDarkMode = () => <Dark>{chipShort}</Dark>
export const chipLongDisplayDarkMode = () => <Dark>{chipLong}</Dark>
