import React from 'react';
import {render, screen} from '@testing-library/react';
import Navigation from './Navigiation';

describe('Navigation', () => {
  it('Renders the navigation', () => {
    render(<Navigation />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  it('Renders a list item', () => {
    render(<Navigation />);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});
