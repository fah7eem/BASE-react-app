/**
 * Created by faheem on 2017/04/12.
 */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import {SomeList, InputArea, ShowSomethingContainer} from '../src/ShowSomething.js';

describe('ShowSomethingContainer', () => {
    it('should render InputArea and SomeList', () => {
        const wrapper = shallow(<ShowSomethingContainer/>);
        expect(wrapper.containsAllMatchingElements([
            <InputArea/>,
            <SomeList/>
        ])).to.equal(true);
    });
});
