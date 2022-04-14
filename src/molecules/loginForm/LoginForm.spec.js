import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
    it('01. Renders the LoginForm component', () => {
        render(<LoginForm />);
        expect(screen.getByLabelText('username')).toBeInTheDocument();
        expect(screen.getByLabelText('email')).toBeInTheDocument();
        expect(screen.getByLabelText('password')).toBeInTheDocument();
        expect(screen.getByLabelText('confirm password')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'sign up'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'sign up'})).toHaveAttribute('type', 'submit');
    });
});