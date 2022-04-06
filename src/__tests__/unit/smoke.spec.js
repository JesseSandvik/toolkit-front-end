import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../../App';

describe('Smoke Test', () => {
  it('Can handle the truth', () => {
    expect(true).toEqual(true);
  });
});

describe('App', () => {
  it('renders Hello World!', () => {
    render(<App />);

    expect(screen.getByRole('heading')).toHaveTextContent('Hello World!');
  });
});
