import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import NavigationLink from './NavLink';

describe('<NavLink />', () => {
  it('01. Renders the NavLink component', () => {
    render(
      <Router>
        <NavigationLink path="*"></NavigationLink>
      </Router>
    );
    const navLink = screen.getByRole('link');
    expect(navLink).toBeInTheDocument();
  });
});
