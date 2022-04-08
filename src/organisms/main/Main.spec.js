import React from 'react';
import {render, screen} from '@testing-library/react';
import Main from './Main';

describe('< />', () => {
  it('01. Renders a welcome message', () => {
    render(<Main />);

    expect(screen.getByRole('heading', {name: 'Welcome!'})).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', {name: 'Welcome to the Thunderdome!'})
    ).not.toBeInTheDocument();
  });
});
