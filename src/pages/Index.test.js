import React from 'react';
import {shallow} from 'enzyme/build';
import Index from ".";


describe('<Index/>', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Index/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render h1 with the expected text', () => {
        const wrapper = shallow(<Index/>);
        expect(wrapper.find('h1').text()).toEqual('Home');
    });

    it('should render h2 with the expected text', () => {
        const wrapper = shallow(<Index/>);
        expect(wrapper.find('h2').text()).toEqual('Aplicação Gatsby');
    });

    it('should render Link with the expected text and path', () => {
        const wrapper = shallow(<Index/>);
        expect(wrapper.find('Link').text()).toEqual('About');
        expect(wrapper.find('Link').prop('href')).toEqual('/about');
    });
});
