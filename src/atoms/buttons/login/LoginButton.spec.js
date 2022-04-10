import React from 'react';
import {render, screen} from '@testing-library/react';
import LoginButton from './LoginButton';

describe('<LoginButton />', () => {
  it('01. Renders the login button component', () => {
    render(<LoginButton />);
    expect(screen.getByRole('button', {name: 'login'})).toBeInTheDocument();
  });
});
