import {createStore} from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const PLUS = "PLUS";
const MINUS = "MINUS"

// starts from 0
number.innerText = 0;

// reducer, only function which can modify data
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case PLUS: return count + 1;
    case MINUS: return count - 1;
    default: return count;
  }
};

const countStore = createStore(countModifier);

// subscribe
const onChange = () => {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange);

// dispatch
plus.addEventListener("click", () => countStore.dispatch({type:PLUS}));
minus.addEventListener("click", () => countStore.dispatch({type:MINUS}));

// vanilla js
// let count = 0;
// number.innerHTML = count;

// const updateNum = () => {
//   number.innerHTML = count
// }

// const handlePlus = () => {
//   count++;
//   updateNum();
// }

// const handleMinus = () => {
//   count--;
//   updateNum();
// }

// plus.addEventListener("click", handlePlus);
// minus.addEventListener("click", handleMinus);