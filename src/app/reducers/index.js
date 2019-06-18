import { RECEIVE_MESSAGE, SEND_MESSAGE  } from '../actions';
import {combineReducers } from 'redux';

const initialState = {
    messages : [],
    action : undefined
};

// store data
 const  message = (state = initialState , action) => {
    switch(action.type){
        case RECEIVE_MESSAGE:
            return {
                ...state,
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