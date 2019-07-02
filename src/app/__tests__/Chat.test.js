import React from 'react';
import { mount } from 'enzyme';
import Chat from '../Chat';
import Root from '../Root';
import { isTSAnyKeyword } from '@babel/types';
import { wrap } from 'module';


let wrapped;
beforeEach(() => {
     wrapped = mount(
       <Root >
          <Chat />
       </Root>
     );
})

afterEach(() => {
    wrapped.unmount();
})
it('has a input and a button', () => {
    expect(wrapped.find('input').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);


})

// it('has a input box ', () => {
//     wrapped.find('input').simulate('input',{
//         target : {value: 'new comment'}
//     });
//     wrapped.update();
//     wrapped.find('form').simulate('submit');
//     wrapped.update();
//     expect(wrapped.find('input').prop('value')).toEqual('')

// })