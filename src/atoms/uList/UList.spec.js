import React from 'react';
import {render, screen} from '@testing-library/react';
import UList from './UList';

describe('<UList />', () => {
  it('Renders the UList component', () => {
    render(<UList />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
