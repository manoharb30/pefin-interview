import React from 'react'
import io from 'socket.io-client'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App'
import reducers from './reducers';
import * as actions from './actions';

const customMiddleware = socket => store => next => action => {
  if(action.type === 'SEND_MESSAGE'){
    socket.emit("message", action.text);
  }
    next(action);

  
}
// See this function for an example of how to send messages and how to
// subscribe and listen for messages



const main = () => {
  
  const socket = io('localhost:9001');
  socket.on('message', msg => {
    store.dispatch({type:'RECEIVE_MESSAGE',text:msg})
  })
  const store = createStore(
    reducers , applyMiddleware(customMiddleware(socket))
  )

  render(
    <Provider store =  {store}>
      <App   socket = {socket}/>
    </Provider> , document.getElementById('app-root')
    )
}

main()
