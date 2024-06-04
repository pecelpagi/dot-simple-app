import React from 'react';
import { render, screen } from '@testing-library/react';
import Auth from '../../pages/Auth';
import { removeApiKey, setApiKey } from '../../utils';

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => {},
        Navigate: ({ to }: { to: string }) => <div>{`Redirected to ${to}`}</div>,
    };
});

test('should redirect to / if api key is not empty', () => {
    setApiKey('323fb606f44b43b4febb6470be051f2c');
    render(<Auth />);
    expect(screen.getByText('Redirected to /')).toBeInTheDocument();
});

test('should redirect to /auth if api key is empty', () => {
    removeApiKey();
    render(<Auth />);
    expect(screen.getByText('Masuk')).toBeInTheDocument();
});