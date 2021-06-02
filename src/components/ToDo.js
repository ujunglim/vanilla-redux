import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../store';

function ToDo({text, onDelClick, id}) {
  return(
    <li>
      <Link to={`/${id}`}>
        {text}
      </Link>
      <button onClick={onDelClick}>Del</button>
    </li>
  );
}

// dispatch actions to the store.
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDelClick: () => dispatch(remove(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(ToDo);