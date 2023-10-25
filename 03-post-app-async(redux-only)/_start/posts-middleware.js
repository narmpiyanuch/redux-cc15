const { createStore, applyMiddleware } = require("redux");
const loggerMiddleWare = require("redux-logger").default;

// initialState
const initialState = {
  posts: [],
};

// Action
const FETCH_POST_PENDING = "FETCH_POST_PENDING";
const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
const FETCH_POST_ERROR = "FETCH_POST_ERROR";

// Action creator
const fetchPostPending = () => {
  return {
    type: FETCH_POST_PENDING,
  };
};

// Reducer
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_PENDING:
      return { posts: ["HTML"] };
    default:
      return state;
  }
};

// custom-middle
const myMiddleware = () => {
  return (next) => {
    return (action) => {
      console.log("Action Fire!!", action);
      next(action); // forward to another middleware or reducer
    };
  };
};

const rootmiddleware = applyMiddleware(loggerMiddleWare, myMiddleware);
// applyMiddleware เอาไว้รวม middleware มาไว้ที่เดียวกัน ในกรณีที่มีหลายๆ middle
// loggerMiddleWare เอาไว้ log ค่า state ก่อนและหลังเข้า reducer

// Store
const store = createStore(postReducer, rootmiddleware);

// store.subscribe(() => {
//   const data = store.getState();
//   console.log(data);
// });

store.dispatch(fetchPostPending());
