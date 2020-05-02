import React from 'react'
import NotesInterface from './NotesPage'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

import { action } from '@storybook/addon-actions'
import { Light, Dark } from 'common/utils/storybookMode'

import 'react-tippy/dist/tippy.css'

export default { title: 'InterfaceNotes' }

const myNotes = (
  <NotesInterface
    onDarkMode={action('onDarkMode')}
    onAddNote={action('onAddNote')}
    onAutoSave={action('onAutoSave')}
    onClose={action('onClose')}
    translate={(text) => text}
    notes={[]}
  />
)

const myNotesWithContent = (
  <NotesInterface
    translate={(text) => text}
    onDarkMode={action('onDarkMode')}
    onAddNote={action('onAddNote')}
    onAutoSave={action('onAutoSave')}
    onClose={action('onClose')}
    notes={[...Array(30)].fill({
      uuid: uuidv4(),
      isStarred: true,
      colour: 'salmon',
      title: 'Hello world',
      dueDate: moment().add(1, 'day').toISOString(),
      content: 'hey ola que tal',
      tags: [
        'hello',
        'world',
        'hey',
        'ha',
        'one more here',
        'hello',
        'world',
        'hey',
        'ha',
        'one more here',
      ],
    })}
  />
)

export const NotesInterfaceLight = () => <Light>{myNotes}</Light>
export const NotesInterfaceDark = () => <Dark>{myNotes}</Dark>

export const NotesInterfaceLightWithContent = () => <Light>{myNotesWithContent}</Light>
export const NotesInterfaceDarkWithContent = () => <Dark>{myNotesWithContent}</Dark>
