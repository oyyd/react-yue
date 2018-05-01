import { createStore } from 'redux'
import reducer from './reducer'

export function createAppStore() {
  const store = createStore(reducer)

  return store
}
