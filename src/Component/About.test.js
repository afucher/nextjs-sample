import React from 'react';
import {shallow} from 'enzyme';
import {About} from './About';

describe('<About/>', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<About/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render h1 with the expected text', () => {
        const wrapper = shallow(<About/>);
        expect(wrapper.find('h1').text()).toEqual('About');
    });

    it('should render h2 with the expected text', () => {
        const wrapper = shallow(<About/>);
        expect(wrapper.find('h2').text()).toEqual('Esse é o about da aplicação');
    });

    it('should render Link with the expected text and path', () => {
        const wrapper = shallow(<About/>);
        expect(wrapper.find('Link').childAt(0).text()).toEqual('Home');
        expect(wrapper.find('Link').prop('to')).toEqual('/');
    });
});
