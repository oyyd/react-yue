const INITIAL_STATE = {
  connections: [],
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_CONNECTION': {
      return Object.assign({}, state, {
        connections: state.connections.concat([action.data]),
      })
    }
    default:
      return state
  }
}
