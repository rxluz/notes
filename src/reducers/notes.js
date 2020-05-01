import { get, isEmpty } from 'lodash'
import { setSelector } from 'Common/utils/state.utils'

const defaultNote = {
  content: '',
  title: '',
  isStarred: false,
  isDraft: true,
  tags: [],
}
const updateOrAddByUUID = (list, note) => ({
  ...list,
  [note.uuid]: note,
})

const createNote = (state, action) => ({
  ...state,
  list: updateOrAddByUUID(get(state, 'list', {}), action.value),
})

const addTag = (tags, tag) => {
  const isTagAlreadyAdded = tags.find((t) => t === tag)
  const isTagValid = !isEmpty(tag)
  if (!isTagAlreadyAdded && isTagValid) {
    tags.push(tag)
  }

  return tags
}

const removeTag = (tags, tag) => tags.filter((innerTag) => innerTag !== tag)

const createNoteTag = (state, action) => ({
  ...state,
  list: {
    ...state.list,
    [action.value.uuid]: {
      ...get(state.list, action.value.uuid, defaultNote),
      uuid: [action.value.uuid],
      isDraft: action.value.isDraft,
      tags: addTag(get(state.list, `${action.value.uuid}.tags`, []), action.value.tag),
    },
  },
})

const removeNoteTag = (state, action) => ({
  ...state,
  list: {
    ...state.list,
    [action.value.uuid]: {
      ...get(state.list, action.value.uuid, defaultNote),
      uuid: [action.value.uuid],
      isDraft: action.value.isDraft,
      tags: removeTag(get(state.list, `${action.value.uuid}.tags`, []), action.value.tag),
    },
  },
})

const clearNote = (state, action) => ({
  ...state,
  list: {
    ...state.list,
    [action.value.uuid]: {
      ...get(state.list, action.value.uuid, defaultNote),
      uuid: [action.value.uuid],
      title: '',
      isDraft: action.value.isDraft,
      content: '',
      colour: 'default',
      tags: [],
    },
  },
})

const listWithoutItem = (list, key) => {
  delete list[key]
  return list
}

const deleteNote = (state, action) => ({
  ...state,
  list: {
    ...listWithoutItem(state.list, action.value.uuid),
  },
})

const updateNoteTitle = (state, action) => ({
  ...state,
  list: {
    ...state.list,
    [action.value.uuid]: {
      ...get(state.list, action.value.uuid, defaultNote),
      uuid: [action.value.uuid],
      title: action.value.title,
      isDraft: action.value.isDraft,
    },
  },
})

const updateNoteContent = (state, action) => ({
  ...state,
  list: {
    ...state.list,
    [action.value.uuid]: {
      ...get(state.list, action.value.uuid, defaultNote),
      uuid: [action.value.uuid],
      content: action.value.content,
      isDraft: action.value.isDraft,
    },
  },
})

const updateNoteColour = (state, action) => ({
  ...state,
  list: {
    ...state.list,
    [action.value.uuid]: {
      ...get(state.list, action.value.uuid, defaultNote),
      uuid: [action.value.uuid],
      colour: action.value.colour,
      isDraft: action.value.isDraft,
    },
  },
})

const toggleStar = (state, action) => ({
  ...state,
  list: {
    ...state.list,
    [action.value.uuid]: {
      ...get(state.list, action.value.uuid, defaultNote),
      uuid: [action.value.uuid],
      isStarred: !get(state.list, action.value.uuid, false).isStarred,
      isDraft: action.value.isDraft,
    },
  },
})

const publishNote = (state, action) => ({
  ...state,
  list: {
    ...state.list,
    [action.value.uuid]: {
      ...get(state.list, action.value.uuid, defaultNote),
      isDraft: false,
    },
  },
})

const list = (state, action) => ({
  NOTE_CREATE: createNote,
  NOTE_CLEAR: clearNote,
  NOTE_CHANGE_TITLE: updateNoteTitle,
  NOTE_CHANGE_CONTENT: updateNoteContent,
  NOTE_TAG_ADD: createNoteTag,
  NOTE_TAG_REMOVE: removeNoteTag,
  NOTE_CHANGE_COLOUR: updateNoteColour,
  NOTE_TOGGLE_STAR: toggleStar,
  NOTE_DELETE: deleteNote,
  NOTE_PUBLISH: publishNote,
})

export default setSelector(list, { list: {} })
