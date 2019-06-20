import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Chat from './Chat'
import * as ChatActions from './actions';

function mapStateToProps(state){
  return {
    messages:state.messages
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(ChatActions,dispatch)
  }
}

class App extends React.Component {
 render (props) {
      return (
      <div>
        <Chat />
      </div>)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
