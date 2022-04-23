import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';

import {appTitle} from '../../appData/index';

describe('<Header />', () => {
  it('01. Renders application title', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: appTitle})).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', {name: 'Welcome to Thunderdome!'})
    ).not.toBeInTheDocument();
  });
});
