//The store binds together the three principals of Redux.
//It holds the current applications State object.
//It lets you dispatch Actions.
//You need to specify the Reducer which tells how State is updated with Actions.


const { createStore } = Redux;
//var createStore = Redux.createStore;
//import {createStore} from 'redux';

const store = createStore(counter);
//counter is the reducer that manages the state updates.

//The store has three important methods:
//
//getState()

console.log(store.getState());
//retrieves the current state of the redux store.


//
//dispatch()
console.log(store.dispatch({ type: 'INCREMENT' }));
//lets you dispatch actions to change the state of your application.
//If you log the stores state after dispatch you will see that it has changed
//
//subscribe()
store.subscribe

//lets you register a callback that the redux store will call
//any time an action has been dispatched-it allows you to update the UI
//of the application.


const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default: 
      return state;
  }
}

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});
