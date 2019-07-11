import { createStore,applyMiddleware } from 'redux'
import  React  from "react";
import io from 'socket.io-client'

import { Provider } from 'react-redux'
import reducers from './reducers'

const socket = io('localhost:9001');
  socket.on('message', msg => {
    store.dispatch({type:'RECEIVE_MESSAGE',text:msg})
  })

export default props => {
  return (
    <Provider store = {store} >
          {props.children}
    </Provider>
  )
}

const customMiddleware = socket => store => next => action => {
  if(action.type === 'SEND_MESSAGE'){
    console.log('store ', store);
    socket.emit("message", action.text);
  }
    next(action); 
}

const store = createStore(
  reducers , applyMiddleware(customMiddleware(socket))
)

const reducer = (state = initState, action) => {
  return state
}

