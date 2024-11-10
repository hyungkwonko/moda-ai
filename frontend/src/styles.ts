// frontend/src/styles.ts

import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';
import { Link } from 'react-router-dom';

export const CustomAppBar = styled(AppBar)({
    backgroundColor: '#fff',
    color: '#333',
    boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.1)',
    padding: '0.5rem 2rem',
});

export const LogoLink = styled(Link)({
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    paddingRight: '1rem',
    transition: 'font-size 0.3s ease',
    '&:hover': {
        fontSize: '1.9rem',
    },
});

export const NavButton = styled(Link)({
    color: 'black',
    textDecoration: 'none',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    transition: 'color 0.3s ease',
    '&:hover': {
        color: 'blue',
        backgroundColor: 'transparent',
        textDecoration: 'underline',
    },
});
