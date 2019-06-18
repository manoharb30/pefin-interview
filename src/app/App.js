import React from 'react'
import Chat from './Chat'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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


  render () {
    
      return (<div>
        <Chat />
      </div>)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
