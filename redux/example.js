const reducer = () => (state = [], action) => {
  if(action.type === 'split_string') {
    return action.payload.split('');
  } else if(action.type === 'add_character') {
    return [ ...state, action.payload]
  }
}


//always return brand new objects with reducers
//
const store = Redux.createStore(reducer)


store.getState();
//will return 123 as the application state

//Action tells the reducer it needs to modify its data-type must be a string, gives the reducer a specific command
//payload tells it which bit of data to point to

const action = {
  type: 'split_string',
  payload: 'asdf'
}

//to push action into the reducer
store.dispatch(action)

store.getState()


const action2 = {
  type: 'add_character',
  payload: 'a'
}

store.dispatch(action2);

store.getState()
//
