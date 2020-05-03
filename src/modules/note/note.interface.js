import { emptyFunc } from 'common/utils/general.utils'

export const noteInterface = {
  uuid: '',
  title: '',
  content: '',
  tags: [],
  colour: 'default',
  scheduleOptions: [],
  isScheduled: false,
  isPinned: false,
  onSettings: emptyFunc,
  onChangeTitle: emptyFunc,
  onChangeContent: emptyFunc,
  onChangeColour: emptyFunc,
  onSchedule: emptyFunc,
  onPin: emptyFunc,
  onDelete: emptyFunc,
  onInfo: emptyFunc,
  onRemoveTag: emptyFunc,
  onAddTag: emptyFunc,
  onSaveAndClose: emptyFunc,
  onClose: emptyFunc,
  translate: emptyFunc,
}
