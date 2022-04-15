import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';

describe('<Header />', () => {
  it('01. Renders application title!', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'toolkit client'})).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', {name: 'Welcome to Thunderdome!'})
    ).not.toBeInTheDocument();
  });
  it('02. Renders the navigation', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  it('03. Renders a list', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  it('04. Renders the navigation link for home, "/"', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole('link', {name: 'home'})).toBeInTheDocument();
  });
  it('05. Renders the login button', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole('button', {name: 'login'})).toBeInTheDocument();
  });
});
