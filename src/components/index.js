import button from './button'
import container from './container'
import entry from './entry'
import group from './group'
import progressbar from './progress_bar'
import scroll from './scroll'

export const Components = {
  button,
  container,
  entry,
  group,
  progressbar,
  scroll,
}

export function hasComponent(type) {
  return Object.hasOwnProperty.call(Components, type)
}
