import React from 'react'
import './storybookMode.scss'

import 'Modules/main/Main.scss'

const StorybookMode = (props) => <div class={`${props.mode}-mode`}>{props.children}</div>

export const Light = (props) => <StorybookMode mode="light">{props.children}</StorybookMode>
export const Dark = (props) => <StorybookMode mode="dark">{props.children}</StorybookMode>
