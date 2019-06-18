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
  // constructor(props) {
  //   super(props)
  //   console.log(props);
  //   this.state = {
  //     messages: []
  //   }
  //   this.handleFormSubmit = this.handleFormSubmit.bind(this)
  //   this.send = this.send.bind(this)
  // }

  // handleFormSubmit (event) {

  //  event.preventDefault();
  //  console.log(this.refs.messageText.value)
  //   this.setState({ messages : [...this.state.messages, this.refs.messageText.value ] });
  //   console.log(this.state);
  //   this.props.socket.emit('message', this.refs.messageText.value);
  // }

  // send (event) {
  //   event.preventDefault()
  //   console.log(this.state.draft)
  //   this.props.socket.emit('message', this.state.draft)
  // }

  render () {
    console.log('props is ',this.props);
    // let i = 0,
    //       messages = this.state.messages.map(message => {
    //         return <li className = "list-group-item" key = {i++}>{message}</li>
    //       })
    // return (
    //         <div className = "container">
    //            <form onSubmit = {this.handleFormSubmit}>
    //                 <div className = "form-group">
    //                     <div className = "input-group">
    //                         <input type ="text" ref="messageText" className = "form-control" />
    //                         <span className="input-group-btn">
    //                             <button type = "submit" className = "btn btn-primary">Send</button>
    //                         </span>
    //                     </div>
    //                 </div>
    //            </form>
    //            <div className = "list-group" >{messages}</div>
    //         </div>
      return (<div>
        <Chat />
      </div>)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
