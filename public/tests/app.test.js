import React from 'react';
import App from '../js/app';
import { render, screen } from '@testing-library/react';

describe('Testing the component', () => {
    it("renders on creation", () => {
        render(<App />);
        const element = screen.getByText(/your text to check/i); // Change 'your text to check' with the text you expect to render
        expect(element).toBeInTheDocument();
    });
});