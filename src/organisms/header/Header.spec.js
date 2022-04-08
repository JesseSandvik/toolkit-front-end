import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('Renders Hello World!', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'Hello World!'})).toBeInTheDocument();
  });
  it('Renders the navigation', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  it('Renders a list item', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
  it('Renders the NavLink in the list item', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
