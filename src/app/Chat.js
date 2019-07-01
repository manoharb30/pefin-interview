import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ChatActions from './actions';
import Message from './Message'

function mapStateToProps(state){
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
        this.props.actions.send(text);
    }

    render() {
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
               <Message  />
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Chat);