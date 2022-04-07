import React from 'react';
import {render, screen} from '@testing-library/react';
import Main from './Main';

describe('Main', () => {
  it('Renders a welcome message', () => {
    render(<Main />);

    expect(screen.getByRole('heading', {name: 'Welcome!'})).toBeInTheDocument();
  });
});
