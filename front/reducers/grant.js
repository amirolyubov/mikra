const initialState = {
  name: 'sfve',
  description: 'svezv',
  bids: []
}

const grant = (state = initialState, action) => {
  switch (action.type) {
    case 'test':
      return state
    default:
      return state
  }
}

export default grant
