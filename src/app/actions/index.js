export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';


export function receive(text) {
    return{
        type : RECEIVE_MESSAGE,
        text
    }
}

export function send(text) {
    return{
        type : SEND_MESSAGE,
        text
    }
}