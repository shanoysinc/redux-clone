# redux-clone
Create the main functionality of the Javascript library redux

Redux is a predictable state container for JavaScript apps.
It helps you write applications that behave consistently, run in different environments (client, server, 
and native), and are easy to test. On top of that, it provides a great developer experience, 
such as live code editing combined with a time traveling debugger.

```javascript

function counter(state = 0, action) {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}
}
// Create a Redux store holding the state of your app.
// Its API is { dispatch, getState }.
let store = createStore(counter);

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: "INCREMENT" });
// 1
store.dispatch({ type: "INCREMENT" });
// 2
store.dispatch({ type: "DECREMENT" });
// 1


// getState returns the current state of your application
store.getState()
```
