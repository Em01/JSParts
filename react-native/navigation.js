//react-native-router-flux
const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="login" component={LoginForm} title="Please Login" />
      <Scene key="employeeList" component={EmployeeList} title="Employees" />
    </Router>
  )
}

//action
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
  Actions.employeeList()
}

  //with nesting you cannot go straight to a nested scene

