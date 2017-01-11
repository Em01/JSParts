//Avoid mutations.

//deepfreeze stop mutations.
//spread operator-
//allows an expression to be expanded in places where multiple arguments for 
//function calls or multiple elements are expected
//

console.log.apply(console, [1, 2, 3]);
console.log(...[1, 2, 3]);

const addCounter = (list) => {
  return [...list, 0];
};

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
    ];
};

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};
