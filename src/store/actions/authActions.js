export const signIn = (user) => {
  return (dispatch, getState) => {
    if (user.password === "TEST") {
      dispatch({ type: 'SIGNIN_SUCCESS' })
    }
    else {
      dispatch({ type: 'SIGNIN_FAILURE' })
    }
  }
}