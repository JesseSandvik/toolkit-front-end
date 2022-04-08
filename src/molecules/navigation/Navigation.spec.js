import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from './Navigiation';

describe('Navigation', () => {
  it('Renders the navigation', () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  it('Renders a list item', () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
  it('Renders the NavLink in the list item', () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
