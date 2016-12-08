//Accepts the State and Action as arguments and returns the next state.


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

expect(
    counter(0, {type: 'INCREMENT'})
).toEqual(1);

//mj assertion library
//When you pass a counter of 0 state with the increment action you expect 1.

expect(
    counter(1, {type: 'INCREMENT'})
).toEqual(2);

expect(
    counter(2, {type: 'DECREMENT'})
).toEqual(1);
