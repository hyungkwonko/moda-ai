// frontend/src/pages/HomePage.styles.ts

import styled from '@emotion/styled';
import { Box, Typography, Button, Card } from '@mui/material';

export const Container = styled(Box)`
    min-height: 100vh;
    padding: 2rem;
    color: #333;
`;

export const CenteredContainer = styled(Box)`
    max-width: 900px;
    margin: auto;
    padding: 1rem; /* Added padding for better spacing */
`;

export const HeaderText = styled(Typography)`
    text-align: center;
    color: #111;
    margin-bottom: 2rem; /* Reduced bottom margin */
`;

export const SubtitleText = styled(Typography)`
    color: #666;
    text-align: center;
    margin-bottom: 2rem;
`;

export const MainMockupBox = styled(Box)`
    margin: auto;
    max-width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export const StyledCard = styled(Card)`
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

`;

export const MockupVideo = styled('video')`
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
`;

export const DemoButton = styled(Button)`
    background-color: #111;
    color: #fff;
    margin: 1rem 0;
    padding: 0.8rem 1.5rem;

    &:hover {
        background-color: #333;
    }
`;

export const FeatureCard = styled(Card)`
    height: 100%;
    background-color: #fff;
    color: #333;
`;

export const FeatureCardImage = styled('img')`
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 4px;
`;

export const SectionHeading = styled(Typography)`
    color: #111;
    text-align: center;
    margin: 2rem 0 1rem; /* Added vertical margin for spacing */
`;

export const SectionText = styled(Typography)`
    max-width: 700px;
    margin: auto;
    margin-bottom: 4rem;
    color: #666;
    text-align: center;
`;

export const CallToActionButton = styled(Button)`
    background-color: #111;
    color: #fff;
    padding: 0.8rem 1.5rem;

    &:hover {
        background-color: #333;
    }
`;
