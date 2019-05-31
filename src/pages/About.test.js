import React from 'react';
import {shallow, mount} from 'enzyme/build';
import About from '../pages/about';

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
        const wrapper = mount(<About/>);
        expect(wrapper.find('h2').text()).toEqual('Esse é o about da aplicação');
    });

    it('should render Link with the expected text and path', () => {
        const wrapper = mount(<About/>);
        expect(wrapper.find('a').text()).toEqual('Home');
        expect(wrapper.find('a').prop('href')).toEqual('/');
    });
});
