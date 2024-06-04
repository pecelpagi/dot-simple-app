import { Routes, Route } from 'react-router-dom';
import Box from '../components/Box';
import AppContextProvider from './AppContextProvider';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Spinner from './Spinner';

function App() {
    return (
        <AppContextProvider>
            <Box
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: window.innerHeight,
                    overflowY: 'auto',
                }}
            >
                <Box
                    css={{
                        height: 'max-content',
                        width: '100%',
                        '@md': {
                            width: 700,
                        },
                        '@lg': {
                            width: 800,
                        }
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='auth' element={<Auth />} />
                    </Routes>
                </Box>
            </Box>
            <Spinner />
        </AppContextProvider>
    );
}

export default App;
