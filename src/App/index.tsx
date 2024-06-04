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
                    padding: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: window.innerHeight
                }}
            >
                <Box>
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
