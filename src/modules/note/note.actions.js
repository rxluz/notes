import { action } from 'Common/utils/state.utils'

export const addNote = action('NOTE_CREATE')
export const addTag = action('NOTE_TAG_ADD')
export const removeTag = action('NOTE_TAG_REMOVE')
export const changeTitle = action('NOTE_CHANGE_TITLE')
export const changeContent = action('NOTE_CHANGE_CONTENT')
export const clearNote = action('NOTE_CLEAR')
export const changeColour = action('NOTE_CHANGE_COLOUR')
export const toggleStar = action('NOTE_TOGGLE_STAR')
export const deleteNote = action('NOTE_DELETE')
export const publishNote = action('NOTE_PUBLISH')
