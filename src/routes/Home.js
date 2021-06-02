import React, { useState } from "react";
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { add } from '../store';

function Home({toDos, addToDo}) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit} >
        <input type="text" placeholder="Write To Do" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{toDos.map(toDo => <ToDo {...toDo} key={toDo.id}/>)}</ul>
    </>
  );
};

// get something from Redux Store, then put to Component's Props
function mapStateToProps(state) {
  return {toDos: state};  // put to component's prop
}

// dispatch actions to the store.
function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(add(text))
  };
}

// connect store and Home component
export default connect(mapStateToProps, mapDispatchToProps)(Home);