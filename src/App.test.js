import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Testing the component', () => {
    it("renders on creation", () => {
        const wrapper = shallow(<App />);
        console.log(wrapper.debug()); // Log the rendered component structure
        const text = wrapper.text(); // Get the text content of the component
        expect(text).toEqual("Next player: XReset Game");
    });
});
