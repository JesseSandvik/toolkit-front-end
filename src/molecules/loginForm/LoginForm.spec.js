import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
    it('01. Renders the LoginForm component', () => {
        render(<LoginForm />);
        expect(screen.getByRole('textbox', {name: /name/i})).toBeInTheDocument();
    });
});