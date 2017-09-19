import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter, delCounter } from "../actions/App.actions";
import { withRouter } from 'react-router-dom';

class ShowCounter extends Component {
  render() {
    return (
      <div>
        <h1> This is a value from the Counter page</h1>
        <p> your count: {this.props.count} </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.app
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (val) => {
      dispatch(addCounter(val));
    },
    del: (val) => {
      dispatch(delCounter(val));
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowCounter));
