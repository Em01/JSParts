/* Redux
 *
 * The whole state of the app is a single JavaScript object.
 *
 * All mutations and changes to state are explicit.
 *
 * The state object is called the State or the State Tree.
 *
 * The State is read only.
 *
 * Any time that you want to amend State you need to dispatch an action.
 *
 * The Action is a plain JavaScript object which describes the chage. It is a minimal 
 * representation of the change in the data.
 *
 * The Action must have a type property which is not undefined-use of string allows
 * for serialization.
 *
 * The Components do not know how it happens all they do is dispatch an Action.
 *
 * Any data that gets anywhere in a redux app does so by actions.
 *
 *
 * You need to be mindful of the differences between pute and impure functions.
 *
 * A pure function:
 * The return value depends solely on the value of the arguments.
 *
 * function circle(x) {
 *  return x * x;
 * }
 *
 * There are no observable side effects such as network or database calls.
 * They just calculate the new value, If you call th pure function with the same set 
 * of arguments you can be confident that you are going to get the same return value.
 *
 * They are predictable
 * They do not modify the values passed to them-think of map and how it returns a new array.
 *
 *
 * Impure functions:
 * They may call the database or network.
 * They may have side effects
 * They mady operate on the DOM
 * They may override the values that you pass to them.
 *
 * Reducer Function:
 * The state mutations need to be described as a pure function that takes the previous state,
 * The action being dispatched and returns the next state of the application.
 * It does not modify the state being given to it. 
 * It has to be pure so it has to return a new object.
 * It is called the Reducer function.
 * */
