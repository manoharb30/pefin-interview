import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Chat from '../Chat';

let wrapped;
beforeEach(() => {
     wrapped = shallow(<App />);
})

it('Shows the chat box ', () => {
  expect(wrapped.find(Chat).length).toEqual(1);
})