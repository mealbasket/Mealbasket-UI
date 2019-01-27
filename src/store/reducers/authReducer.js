const initState = {
  status: 'NOT LOGGED IN'
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      console.log('Sign in success');
      return {
        ...state,
        status: 'LOGGED IN'
      }
    default:
      return state;
  }
}

export default authReducer;