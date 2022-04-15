import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from './Navigiation';

describe('<Navigation />', () => {
  it('01. Renders the navigation', () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  it('02. Renders a list', () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  it('03. Renders the navigation link for home, "/"', () => {
    render(<Router><Navigation /></Router>);
    expect(screen.getByRole('link', {name: /home/i})).toBeInTheDocument();
  });
});
