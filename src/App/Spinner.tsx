import React, { useContext } from 'react';
import './spinner.styles.css';
import Box from '../components/Box';
import AppContext from './AppContext';

const Spinner = () => {
    const { loading } = useContext(AppContext);

    if (!loading) return null;

    return (
        <Box
            css={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#ffffff33',
            }}
        >
            <div className="spinner-overlay gap-3">
                <div className="spinner-container" />
                <h5>Data sedang diproses ...</h5>
            </div>
        </Box>
    );
}

export default Spinner;