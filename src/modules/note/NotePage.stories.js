import React from 'react'
import NoteInterface from './NotePage'

import { action } from '@storybook/addon-actions'
import { Light, Dark } from 'common/utils/storybookMode'

import 'react-tippy/dist/tippy.css'

export default { title: 'InterfaceNote' }

const list = ['hello', 'world', 'hey', 'haha']
const TAGS = [...list, ...list, ...list]
const OPTIONS = []
OPTIONS.push({ value: 'TODAY', text: 'Today' })
OPTIONS.push({ value: 'TOMORROW', text: 'Tomorrow' })
OPTIONS.push({ value: 'TWO_DAYS', text: 'Two days' })
OPTIONS.push({ value: 'NEXT_WEEK', text: 'Next week' })

const myNote = (
  <NoteInterface
    translate={(text) => text}
    uuid="1234"
    scheduleOptions={OPTIONS}
    onRemoveTag={action('removeTags')}
    onAddTag={action('AddTags')}
    onPin={action('Pin')}
    isScheduled={true}
    isPinned={true}
    onChangeColour={action('ChangeColour')}
    onDelete={action('onDelete')}
    onInfo={action('onInfo')}
    onSaveAndClose={action('onSaveAndClose')}
    onSave={action('onSave')}
    onSchedule={action('onSchedule')}
    colour="pink"
    tags={TAGS}
  />
)

export const NoteInterfaceLight = () => <Light>{myNote}</Light>

export const NoteInterfaceDark = () => <Dark>{myNote}</Dark>
