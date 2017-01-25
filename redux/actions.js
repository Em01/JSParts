/* Actions and action creators
 *
 * An Action creator is a function that returns an action.
 *
 * An event calls an action creator
 *
 * An action creator returns an object, the object has a type that describes the type of action that was just triggered.
 * The action can also have some data that further describes the action. the object itself is called an action.
 *
 * The object then gets automatically sent to the reducers
 * The reducers usually have a switch statement depending on the type of the action.
 *
 * Depending on the action the reducers can choose to return a different piece of state depending on what the action is.
 * If the reducer doesnt care about that action it will just return the current state.
 *
 * That piece of state then gets piped into the application state containers (mapStateToProps)
 * Passes to reducers (map dispatch to props with bindActionCreators) - takes all the actions and spits back out to all the reducers in the app.
 * Anything returned from mapDispatchToProps will end up as props on the relevent container
 *
 * Then all the components re render
 */

 //Actions usually have two values-a type and a payload
 //The type describes the use of the action

 export function myAction(action) {
 	return {
 		type: 'MY_ACTION',
 		payload: action
 	};
 }


