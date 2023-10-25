const { createStore } = require("redux");

// Redux
// - #State
const initialState = {
  count: 0,
};

// - #Action : JS Object (convention INCREMENT_BY)
// ActionType Constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_FIVE = "INCREMENT_BY_FIVE";
const INCREMENT_BY = "INCREMENT_BY";
const DECREMENT_BY = "DECREMENT_BY";

// ## Action - increment
const increment = {
  type: INCREMENT,
};

const decrement = {
  type: DECREMENT,
};

const reset = {
  type: RESET,
};

const incrementByFive = {
  type: INCREMENT_BY_FIVE,
  payload: 5,
};

// ## Action Creator
const incrementByAction = (amount) => {
  return {
    type: INCREMENT_BY,
    payload: amount,
  };
};

const decrementByAction = (amount) => {
  return {
    type: DECREMENT_BY,
    payload: amount,
  };
};

const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetAction = () => {
  return {
    type: RESET,
  };
};

const incrementByFiveAction = () => {
  return {
    type: INCREMENT_BY_FIVE,
    payload: 5,
  };
};

// - #Reducer : Logic based on ActionType
// Input : state, action
// Return : newState (Do not Modify)

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { count: state.count + 1 };
  } else if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  } else if (action.type === RESET) {
    return { count: 0 };
  } else if (action.type === INCREMENT_BY_FIVE) {
    return { count: state.count + action.payload };
  } else if (action.type === INCREMENT_BY) {
    return { count: state.count + action.payload };
  } else if (action.type === DECREMENT_BY) {
    return { count: state.count - action.payload };
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

store.dispatch(increment); // dispatch(action)
store.dispatch(incrementAction()); // dispatch(actionCreator())
store.dispatch(decrementAction());
store.dispatch(incrementByFiveAction());
store.dispatch(resetAction());
store.dispatch(incrementByAction(42));
store.dispatch(decrementByAction(2));

// dispatch => syntax : dispatch(action)
// store.dispatch(increment);
// console.log(store.getState());

// store.dispatch(increment);
// console.log(store.getState());

// store.dispatch(decrement);
// store.dispatch(incrementByFive);
// console.log(store.getState());

// store.dispatch(reset);
// console.log(store.getState());
