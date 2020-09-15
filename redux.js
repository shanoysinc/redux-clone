function createStore(reducer, initialState) {
	let state = initialState;

	function getState() {
		return state;
	}
	function dispatch(action) {
		state = reducer(state, action);
	}
	return { dispatch, getState };
}

function reducer(state = [], action) {
	switch (action.type) {
		case "add":
			return [...state, action.payload];
		default:
			return state;
	}
}

const store = createStore(reducer);
store.dispatch({ type: "add", payload: "learn to code" });
store.dispatch({ type: "add", payload: "react" });
console.log(store.getState());
