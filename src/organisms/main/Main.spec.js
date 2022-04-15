import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';

import Main from './Main';

describe('< />', () => {
  it('01. Renders a welcome message', () => {
    render(
      <Router>
        <Main />
      </Router>
    );

    expect(screen.getByRole('heading', {name: 'Welcome!'})).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', {name: 'Welcome to the Thunderdome!'})
    ).not.toBeInTheDocument();
  });
  it('02. Renders the current route', () => {
    render(
      <Router>
        <Main />
      </Router>
    );
    expect(screen.getByRole('heading', {name: 'Welcome!'})).toBeInTheDocument();
  });
});
