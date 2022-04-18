import axios from 'axios';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';
import { listRequests } from './axios';

jest.mock('axios');

describe('Axios', () => {
    it('01. Renders a list of requests from the API', () => {
        render(<Router><App /></Router>)
    });
});