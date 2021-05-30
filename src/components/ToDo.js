import React from "react";
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function ToDo({text, onDelClick}) {
  return(
    <li>
      {text}
      <button onClick={onDelClick}>Del</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDelClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(ToDo);