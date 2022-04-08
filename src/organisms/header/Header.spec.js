import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';

describe('<Header />', () => {
  it('Renders Hello World!', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'Hello World!'})).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', {name: 'Welcome to Thunderdome!'})
    ).not.toBeInTheDocument();
  });
  it('01. Renders the navigation', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  it('02. Renders a list', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  it('03. Renders the NavLink in the list item', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
  it('04. Renders the "Home" NavLink list item', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole('link', {name: 'home'})).toBeInTheDocument();
  });
});
