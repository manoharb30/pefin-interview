import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import Chat from '../Chat';
import Root from '../Root';

let wrapped;
beforeEach(() => {
     wrapped = mount(
       <Root >
          <App />
     </Root>
     );
})

it('Shows the chat box ', () => {
  expect(wrapped.find(Chat).length).toEqual(1);
})