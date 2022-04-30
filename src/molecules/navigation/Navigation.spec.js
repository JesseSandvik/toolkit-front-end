import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from './Navigiation';

import {appRoutes} from '../../appData/appRoutes';

describe('<Navigation />', () => {
  it('01. Renders the navigation', () => {
    render(
      <Router>
        <Navigation routes={appRoutes} />
      </Router>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  it('02. Renders a list', () => {
    render(
      <Router>
        <Navigation routes={appRoutes} />
      </Router>
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  it('03. Renders the navigation link for about, "/about"', () => {
    render(<Router><Navigation routes={appRoutes} /></Router>);
    expect(screen.queryByRole('link', {name: /savage/i})).not.toBeInTheDocument();
    expect(screen.getByRole('link', {name: /about/i})).toBeInTheDocument();
  });
  it('04. Renders the navigation link for gallery, "/gallery"', () => {
    render(<Router><Navigation routes={appRoutes} /></Router>);
    expect(screen.getByRole('link', {name: /gallery/i})).toBeInTheDocument();
  });
  it('05. Renders the navigation link for menu, "/menu"', () => {
    render(<Router><Navigation routes={appRoutes} /></Router>);
    expect(screen.getByRole('link', {name: /menu/i})).toBeInTheDocument();
  });
  it('06. Renders the navigation link for contact, "/contact"', () => {
    render(<Router><Navigation routes={appRoutes} /></Router>);
    expect(screen.getByRole('link', {name: /contact/i})).toBeInTheDocument();
  });
});
