import React from 'react';
import {render, screen} from '@testing-library/react';
import ListItem from './ListItem';

describe('<ListItem />', () => {
  it('01. Renders the list item', () => {
    render(<ListItem />);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});
