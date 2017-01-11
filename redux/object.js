//object assign method lets you assign properties of several objects on to the
//target object. may need a polyfill.
//
const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
}
