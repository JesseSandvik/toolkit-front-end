import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('Renders Hello World!', () => {
    render(<Header />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'Hello World!'})).toBeInTheDocument();
  });
  it('Renders the navigation', () => {
    render(<Header />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
