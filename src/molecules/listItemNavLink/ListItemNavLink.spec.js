import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import ListItemNavigationLink from './ListItemNavLink';

describe('<ListItemNavLink />', () => {
  it('Renders the NavLink in the list item', () => {
    render(
      <Router>
        <ListItemNavigationLink />
      </Router>
    );
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
