import React from 'react'
import { FiX, FiAperture } from 'react-icons/fi'

import Icon from './Icon'
import { Light, Dark } from 'Common/utils/storybookMode'

import 'react-tippy/dist/tippy.css'

export default { title: 'Icon' }

const iconElement = ({ isActive = false, element, tip = false } = {}) => (
  <Icon tip={tip} isActive={isActive}>
    {element}
  </Icon>
)

export const icon = () => <Light>{iconElement({ element: <FiX /> })}</Light>
export const iconWithTip = () => (
  <Light>{iconElement({ tip: 'hello world', element: <FiAperture /> })}</Light>
)
export const iconActive = () => (
  <Light>{iconElement({ isActive: true, element: <FiAperture /> })}</Light>
)

export const iconActiveWithTip = () => (
  <Light>{iconElement({ tip: 'hello world', isActive: true, element: <FiX /> })}</Light>
)

export const iconDark = () => <Dark>{iconElement({ element: <FiAperture /> })}</Dark>
export const iconDarkWithTip = () => (
  <Dark>{iconElement({ tip: 'hello world', element: <FiAperture /> })}</Dark>
)
export const iconDarkActive = () => (
  <Dark>{iconElement({ isActive: true, element: <FiAperture /> })}</Dark>
)

export const iconDarkWithTipActive = () => (
  <Dark>{iconElement({ tip: 'hello world', isActive: true, element: <FiAperture /> })}</Dark>
)
