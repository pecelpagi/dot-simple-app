import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';
import { removeApiKey, setApiKey } from '../../utils';

jest.mock('react-router-dom', () => {
    return {
        Navigate: ({ to }: { to: string }) => <div>{`Redirected to ${to}`}</div>,
    };
});

test('should redirect to /auth if api key is empty', () => {
    removeApiKey();
    render(<Home />);
    expect(screen.getByText('Redirected to /auth')).toBeInTheDocument();
});

test('should redirect to / if api key is not empty', () => {
    setApiKey('323fb606f44b43b4febb6470be051f2c');
    render(<Home />);
    expect(screen.getByText('Cek Ongkir')).toBeInTheDocument();
    expect(screen.getByText('Log Out')).toBeInTheDocument();
    expect(screen.queryByText('Masuk')).not.toBeInTheDocument();
});