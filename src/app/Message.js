import React, { Component } from 'react';
import { connect } from "react-redux";


function mapStateToProps(state){
    console.log(state.message.messages);
    return {
      messages:state.message.messages
    };
  }

class Message extends Component {
    render() {
        var i = 0,
          messages = this.props.messages.map(message => {
            return  <li className = "list-group-item" key = {i++}>
                        {message} 
                     <pre> <h6> Message sent at </h6> {(new Date).toLocaleTimeString()} </pre>
                    </li>
          })
        return (
            <div className = "list-group" >{messages}</div>
        );
    }
}

export default connect(mapStateToProps) (Message);