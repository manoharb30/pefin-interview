import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ChatActions from './actions';

function mapStateToProps(state){
    console.log(state.message.messages);
    return {
      messages:state.message.messages
    };
  }
  
  function mapDispatchToProps(dispatch){
    return{
      actions:bindActionCreators(ChatActions,dispatch)
    }
  }
class Chat extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let text = this.refs.messageText.value;
        this.refs.messageText.value = '';
        // this.props.example(this.props.socket);
        this.props.socket.emit("message",text)
        this.props.actions.send(text);
    }

    render() {
        var i = 0,
          messages = this.props.messages.map(message => {
            return <li className = "list-group-item" key = {i++}>{message}</li>
          })
        return (
            <div className = "container">
               <form onSubmit = {this.handleFormSubmit}>
                    <div className = "form-group">
                        <div className = "input-group">
                            <input type ="text" 
                               placeholder = "Type your message here ..."
                               ref="messageText" 
                               className = "form-control" />
                            <span className="input-group-btn">
                                <button type = "submit" className = "btn btn-primary">Send</button>
                            </span>
                        </div>
                    </div>
               </form>
               <div className = "list-group" >{messages}</div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Chat);