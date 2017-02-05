//redux-thunk is middleware
//Can return a function from an action creator
//Function will be called with dispatch.
//We have direct access to the dispatch menthod to manually dispatch the action to the reducers.


export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({
        type: 'LOGIN_USER_SUCCESS',
        payload: user
      })
    })
  }
}

