const countElem = document.getElementsByClassName("counter__count")[0];
const resetBtn = document.getElementsByClassName("counter__reset")[0];
const incBtn = document.getElementsByClassName("counter__increaseBtn")[0];
const decBtn = document.getElementsByClassName("counter__decreaseBtn")[0];
//
//
//
//
// Actions
const incrementAction = { type: "INCREMENT" };
const decrementAction = { type: "DECREMENT" };
const resetAction = { type: "RESET" };
//
//
//
//
// Reducer
const counterReducer = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return ++state;
  }
  //
  else if (action.type === "DECREMENT") {
    return --state;
  }
  //
  else if (action.type === "RESET") {
    return 0;
  }
};
//
//
//
//
// store
const store = Redux.createStore(counterReducer);