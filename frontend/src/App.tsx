// frontend/src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toolbar, Typography, Box } from '@mui/material';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

// Import styled components
import { CustomAppBar, LogoLink, NavButton } from './styles';

const App: React.FC = () => {
    return (
        <Router>
            <CustomAppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <LogoLink to="/">Moda</LogoLink>
                    </Typography>
                    <NavButton to="/product">Demo</NavButton>
                </Toolbar>
            </CustomAppBar>
            <Box sx={{ padding: 2 }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product" element={<ProductPage />} />
                </Routes>
            </Box>
        </Router>
    );
};

export default App;
