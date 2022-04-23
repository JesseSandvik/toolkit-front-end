import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import SignUpButton from './SignUpButton';

describe('<SignUpButton />', () => {
  it('01. Renders the SignUp button component', () => {
    render(
      <Router>
        <SignUpButton />
      </Router>
    );
    expect(screen.getByRole('button', {name: 'sign up'})).toBeInTheDocument();
  });
});
