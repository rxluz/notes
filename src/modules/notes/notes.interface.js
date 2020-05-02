import { emptyFunc } from 'common/utils/general.utils'

export const notesInterface = {
  notes: [],
  searchTerm: '',
  isSearchMode: false,
  onAdd: emptyFunc,
  onSettings: emptyFunc,
  onSearch: emptyFunc,
}

export const notesPageInterface = {
  notes: [],
  searchTerm: '',
  isSearchMode: false,
  onOpenNote: emptyFunc,
  onAdd: emptyFunc,
  onSettings: emptyFunc,
  onClearSearch: emptyFunc,
  onSearch: emptyFunc,
  translate: emptyFunc,
}
