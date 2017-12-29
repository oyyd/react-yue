import button from './button'
import container from './container'
import entry from './entry'
import group from './group'
import progressbar from './progress_bar'
import scroll from './scroll'
import label from './label'
import textedit from './text_edit'
import vibrant from './vibrant'

export const Components = {
  button,
  container,
  entry,
  group,
  progressbar,
  scroll,
  label,
  textedit,
  vibrant,
}

export function hasComponent(type) {
  return Object.hasOwnProperty.call(Components, type)
}
