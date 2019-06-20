import io from 'socket.io-client'
import { makeStore } from './store'
import React from 'react'
import { render } from 'react-dom'
import App from './App'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import * as actions from './actions';


const store = createStore(
  reducers
)

// See this function for an example of how to send messages and how to
// subscribe and listen for messages
const example = (socket) => {
  socket.emit('message', 'hello world')
  socket.on('message', msg => {
    // console.log('Received message: ', msg);
    store.dispatch({type:'RECEIVE_MESSAGE',text:msg})
  })
}

const main = () => {
  const socket = io('localhost:9001');
  example(socket,store);
  // const store = makeStore()

  // const app = (
  //   <App socket={socket} />
  // )
  render(
    <Provider store =  {store}>
      <App example = {example }  socket = {socket}/>
    </Provider> , document.getElementById('app-root')
    )
}

main()
