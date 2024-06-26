import { counterActionCreator } from "./Redux/actionCreator.js";
import {
  counterDecrement,
  counterIncrement,
  counterReset,
} from "./Redux/actionsTypes.js";

const countElem = document.getElementsByClassName("counter__count")[0];
const resetBtn = document.getElementsByClassName("counter__reset")[0];
const incBtn = document.getElementsByClassName("counter__increaseBtn")[0];
const decBtn = document.getElementsByClassName("counter__decreaseBtn")[0];
//
//
//
//
// Reducer
const counterReducer = (state = 0, action) => {
  if (action.type === counterIncrement) {
    return ++state;
  }
  //
  else if (action.type === counterDecrement) {
    return --state;
  }
  //
  else if (action.type === counterReset) {
    return 0;
  }
};
//
//
//
//
// store
const store = Redux.createStore(counterReducer);
//
//
//
//
// Count Change Color handle
const setCountColor = (count) => {
  if (count > 0) {
    countElem.style.color = "green";
  }
  //
  else if (count < 0) {
    countElem.style.color = "red";
  }
  //
  else {
    countElem.style.color = "white";
  }
};
//
//
//
//
// handle Events
resetBtn.addEventListener("click", () => {
  const action = counterActionCreator(counterReset);
  store.dispatch(action);
  countElem.innerHTML = store.getState();
  setCountColor(store.getState());
});
incBtn.addEventListener("click", () => {
  const action = counterActionCreator(counterIncrement);
  store.dispatch(action);
  countElem.innerHTML = store.getState();
  setCountColor(store.getState());
});
decBtn.addEventListener("click", () => {
  const action = counterActionCreator(counterDecrement);
  store.dispatch(action);
  countElem.innerHTML = store.getState();
  setCountColor(store.getState());
});
