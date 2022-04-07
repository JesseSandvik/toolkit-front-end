import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders Hello World!', () => {
    render(<Header />);
    expect(screen.getByRole('heading', {name: 'Hello World!'})).toBeInTheDocument();
  });
});
