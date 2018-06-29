export function storage(fields) {
  return store => {
    Object.assign(store.state, localStorage.state ? JSON.parse(localStorage.state) : null)

    store.subscribe((mutation, state) => {
      localStorage.state = JSON.stringify(extractState(state, fields))
    })
  }
}

function extractState(state, fields) {
  return fields.reduce((newState, field) => {
    newState[field] = state[field]
    return newState
  }, {})
}
