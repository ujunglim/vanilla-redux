import {createStore} from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// starts from 0
number.innerText = 0;

// reducer, only function which can modify data
const countModifier = (count = 0, action) => {
  if(action.type == "plus") {
    return count + 1;
  }
  else if(action.type =="minus") {
    return count - 1;
  }
  else {
    // when there's no action
    return count;
  }
};

const countStore = createStore(countModifier);

// subscribe
const onChange = () => {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange);

// dispatch
plus.addEventListener("click", () => countStore.dispatch({type:"plus"}));
minus.addEventListener("click", () => countStore.dispatch({type:"minus"}));

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