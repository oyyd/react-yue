import button from './button'
import container from './container'

export const Components = {
  button,
  container,
}

export function hasComponent(type) {
  return Object.hasOwnProperty.call(Components, type)
}
