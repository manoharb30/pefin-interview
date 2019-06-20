import {combineReducers } from 'redux';
import { RECEIVE_MESSAGE, SEND_MESSAGE  } from '../actions';

const initialState = {
    messages : [],
    action : undefined
};

// store data
 const  message = (state = initialState , action) => {
     debugger;
    switch(action.type){
        case RECEIVE_MESSAGE:
            return {
                ...state,
                messages : [...state.messages, action.text],
                action:action
            }
        case SEND_MESSAGE:
            return {
                ...state,
                messages : [...state.messages, action.text],
                action:action
            }
        default:
            return state;
    }
}

export default combineReducers({
    message : message 
})