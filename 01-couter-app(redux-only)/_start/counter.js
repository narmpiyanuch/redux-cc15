const { createStore } = require("redux");

// Redux
// - #State
const initialState = {
  count: 0,
};

// - #Action : JS Object (convention INCREMENT_BY)
const increment = {
  type: "INCREMENT",
};

const decrement = {
  type: "DECREMENT",
};

const reset = {
  type: "RESET",
};

const incrementByFive = {
  type: "INCREMENT_BY_FIVE",
  payload: 5,
};

// - #Reducer : Logic based on ActionType
// Input : state, action
// Return : newState (Do not Modify)

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  } else if (action.type === "RESET") {
    return { count: 0 };
  } else if (action.type === "INCREMENT_BY_FIVE") {
    return { count: state.count + action.payload };
  }
  return state;
};

// - #Store
const store = createStore(counterReducer);

// getState : ดูข้อมูล current state
// console.log(store.getState());

// subscribe : ติดตามข้อมูล
store.subscribe(() => {
  const state = store.getState();
  console.log("current state", state);
});

// dispatch => syntax : dispatch(action)
store.dispatch(increment);
// console.log(store.getState());

store.dispatch({ type: "INCREMENT" });
// console.log(store.getState());

store.dispatch(decrement);
store.dispatch(incrementByFive);
// console.log(store.getState());

store.dispatch(reset);
// console.log(store.getState());
