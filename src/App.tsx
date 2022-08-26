import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './context/DataContext';
import AppRoutes from './routes/AppRoutes';

function App() {
    return (
        <AppProvider>
            <Router>
                <AppRoutes />
            </Router>
        </AppProvider>
    );
}

export default App;
