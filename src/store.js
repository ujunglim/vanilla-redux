import {createStore} from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

// action creators
export const addToDo = (text) => {
  return {type: ADD, text};
}

export const deletToDo = (id) => {
  return {type: DELETE, id};
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD: 
      return [{text: action.text, id: Date.now(), ...state}]
    case DELETE:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
  return 
}

const store = createStore(reducer);
export default store;