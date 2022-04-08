import React from 'React';
import {render, screen} from '@testing-library/react';
import Footer from './Footer';
import {creator} from '../../appData/index';

describe('< />', () => {
  it('01. Renders the copyright year in the footer', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toHaveTextContent(new Date().getFullYear());
    expect(screen.getByRole('contentinfo')).toHaveTextContent(creator);
  });
});
