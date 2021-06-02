import React from "react";
import { connect } from 'react-redux';

function Detail({toDo}) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at {toDo?.id}</h5>
    </>
  );
}

// can use ownProps rather than useParams
function mapStateToProps(state, ownProps) {
  const {match: {params: {id}}} = ownProps; 

  return {toDo: state.find(toDo => toDo.id == parseInt(id))}  
  // find() returns 1st item which saticifies test.
}

export default connect(mapStateToProps)(Detail);