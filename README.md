# Vanilla Redux

Learning Vanilla Redux and React Redux

## Set project

```
npx create-react-app vanilla-redux
```

## Install Redux

```
npm install redux
```

State is data of application and Store is the place that you put your state.

```js
import { createStore } from "redux";

const store = createStore();
```

Store needs Reducer. Reducer is a function that determines changes to an application's state.<br>

---

## React Redux

```
npm add react-redux react-router-dom
```

index.js

```js
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

connect(mapStateToProps, mapDispatchToProps): connects Store and Component.

- mapStateToProps: get something from Redux Store, then put to Component's Props
- mapDispatchToProps: dispatch actions to the store.

```js
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

---

## Install Redux Toolkit

```
npm add @reduxjs/toolkit
```

## createAction()

Parameter: (type)<br>
Helper function defining a Redux action type and creator, then returns an action creator function for that type.

```js
import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");
```

## createReducer()

Parameters(initialState, builderCallback)<br>
Enable to make reducer without **_switch_**, moreover can mutate state.

```js
import { createReducer } from "@reduxjs/toolkit";

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});
```

## configureStore()

Redux Developer Tools
Can check exactly what changes happend to state

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko

```js
import { configureStore } from "@reduxjs/toolkit";
```

## createSlice()

Parameter: A single configuration object

Accepts an initial state, an object full of reducer functions, and automatically generates action creators and action types that correspond to the reducers and state.

```js
import { createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.unshift({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos.actions;
export default configureStore({ reducer: toDos.reducer });
```
