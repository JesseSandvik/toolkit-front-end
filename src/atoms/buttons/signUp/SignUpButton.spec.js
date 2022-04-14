import React from 'react';
import {render, screen} from '@testing-library/react';
import SignUpButton from './SignUpButton';

describe('<SignUpButton />', () => {
  it('01. Renders the SignUp button component', () => {
    render(<SignUpButton />);
    expect(screen.getByRole('button', {name: 'sign up'})).toBeInTheDocument();
  });
});
