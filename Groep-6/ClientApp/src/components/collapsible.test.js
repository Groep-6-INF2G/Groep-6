import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import Collapsible from './Collapsible';


Enzyme.configure({ adapter: new Adapter() });


describe('collapsible', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Collapsible />)
        expect(wrapper.getElements()).toMatchSnapshot();
    });
    it('checks the state to be false', () => {
        const wrapper = shallow(<Collapsible />)
        expect(wrapper.state('isOpen')).toEqual(false);
    });
    it("Checks if onclick event happened", () => {
        // given
        const wrapper = shallow(<Collapsible />)
        const mockEvent = { stopPropagation: jest.fn() };
        wrapper.find('div.clickable').simulate('click', mockEvent)
        expect(wrapper.state('isOpen')).toEqual(true)
    });
    it('Checks if onclick event did not happen ', () => {
        const wrapper = shallow(<Collapsible />)
        const mockEvent = { stopPropagation: jest.fn() };
        wrapper.find('div.clickable').simulate('button', mockEvent)
        expect(wrapper.state('isOpen')).toEqual(false);
    })
   });


