import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import NavigationLink from './NavLink';

describe('<NavLink />', () => {
  it('Renders the NavLink component', () => {
    render(
      <Router>
        <NavigationLink />
      </Router>
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
