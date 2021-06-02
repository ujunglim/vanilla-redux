// index without Redux Toolkit

import {createStore} from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
// const variable of action
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

// create store
const countStore = createStore(countModifier);

// subscribe
const onChange = () => {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange);

// dispatch
plus.addEventListener("click", () => countStore.dispatch({type:PLUS}));
minus.addEventListener("click", () => countStore.dispatch({type:MINUS}));

//=========================== Todo =============================
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
// const variable of action
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// action creators which return action
const addToDo = (text) => {
  return {type: ADD_TODO, text};
}

const deleteToDo = (id) => {
  return {type: DELETE_TODO, id};
}

// modify state
const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO: 
      const newToDoObj = {text: action.text, id: Date.now()};
      return [newToDoObj, ...state]; // return new array since state is immutable
    case DELETE_TODO: 
      return state.filter(toDo => toDo.id !== action.id); // return new array since state is immutable
    default:
      return state;
  }
}

// create store
const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
}

// process when click delete button
const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id); // get id of clicked list
  store.dispatch(deleteToDo(id)); // send id to delete action
}

// render list
const paintToDo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";  // clean all before create, to prevent repetitive list rendering

  // create list for each array item
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.addEventListener("click", dispatchDeleteToDo)

    li.id = toDo.id; // give id to every list
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

// re-render when store has change
store.subscribe(paintToDo);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
}

form.addEventListener("submit", onSubmit);

