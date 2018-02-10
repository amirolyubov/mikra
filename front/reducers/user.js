const initialState = {
  name: 'afa',
  email: 'faec'
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'test':
      return state
    default:
      return state
  }
}

export default user
