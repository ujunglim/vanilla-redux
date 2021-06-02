import {configureStore, createSlice} from "@reduxjs/toolkit";
// createSlice 
// Parameter: A single configuration object
// Accepts an initial state, an object full of reducer functions, 
// and automatically generates action creators and action types that correspond to the reducers and state.
const toDos = createSlice({
  name:'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.unshift({text: action.payload, id: Date.now()}); 
       // order lists depends on newst time to oldest
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload) 
    // get ids of list except of delete list by filtering
  }
});

// export actions
export const {add, remove} = toDos.actions;
export default configureStore({reducer:toDos.reducer});