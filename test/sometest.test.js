import React, {component} from 'react';
import { shallow} from 'enzyme';
import { expect } from 'chai';
import {describe, it} from 'mocha';
import {spy} from 'sinon';
import App from '../src/App';


const wrapper = shallow(<App />);

describe('(Component) App', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });
});

describe('<ContactRelationshipForm/>', () => {
    context("when first rendered", () => {
        it("contains <App/> contains class App", () => {
            //noinspection JSUnresolvedVariable
            expect(wrapper.find('.App')).to.have.length(1);
        });
    });
});