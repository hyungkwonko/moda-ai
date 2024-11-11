// frontend/src/pages/HomePage.tsx

import React from 'react';
import { Box, Stack, CardContent, Typography } from '@mui/material';
import { 
    Container, CenteredContainer, HeaderText, SubtitleText, MainMockupBox, StyledCard, MockupVideo, 
    DemoButton, FeatureCard, FeatureCardImage, SectionHeading, SectionText, CallToActionButton 
} from './HomePage.styles';

const HomePage: React.FC = () => {
    return (
        <Container>
            <CenteredContainer>
                {/* Header Section with Main Mockup */}
                <Box sx={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <HeaderText variant="h2" gutterBottom>
                        Moda: Intelligent Design for Physical Products
                    </HeaderText>
                    <SubtitleText variant="h5" color="textSecondary" gutterBottom>
                        Enabling anyone to design products smarter, faster, and with data-driven insights
                    </SubtitleText>

                    {/* Main Mockup Video */}
                    <MainMockupBox>
                        <StyledCard>
                            <MockupVideo
                                src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with actual video link
                                controls
                                autoPlay
                                loop
                                muted
                            />
                        </StyledCard>
                    </MainMockupBox>

                    <DemoButton variant="contained">Request a Demo</DemoButton>
                </Box>

                {/* Problem & Solution Section with Images */}
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" sx={{ flexWrap: 'wrap', mb: 6 }}>
                    <Box sx={{ flex: '1 1 300px', mb: 4 }}>
                        <FeatureCard>
                            <FeatureCardImage
                                src="https://via.placeholder.com/600x200/333/fff"
                                alt="Problem Illustration"
                            />
                            <CardContent sx={{ minHeight: '200px' }}>
                                <SectionHeading variant="h4" gutterBottom>
                                    The Problem
                                </SectionHeading>
                                <SectionText variant="body1" color="textSecondary">
                                    Current design tools like Adobe, Autodesk, and Rhino are outdated and hard to use. 
                                    They lack collaboration features, are disconnected from company data, and create 
                                    siloed workflows that lead to uninformed design decisions and waste. Moda solves 
                                    this by bringing generative tools and business intelligence into a collaborative 
                                    browser-based workspace.
                                </SectionText>
                            </CardContent>
                        </FeatureCard>
                    </Box>

                    <Box sx={{ flex: '1 1 300px', mb: 4 }}>
                        <FeatureCard>
                            <FeatureCardImage
                                src="https://via.placeholder.com/600x200/333/fff"
                                alt="Solution Illustration"
                            />
                            <CardContent sx={{ minHeight: '200px' }}>
                                <SectionHeading variant="h4" gutterBottom>
                                    Our Solution
                                </SectionHeading>
                                <SectionText variant="body1" color="textSecondary">
                                    Moda provides an intelligent, collaborative design workflow that combines generative AI, 
                                    business insights, and past customer data to empower brands in apparel, CPG, and more. 
                                    Like Canva and Figma did for graphics, Moda democratizes physical product design by 
                                    making it accessible and intuitive.
                                </SectionText>
                            </CardContent>
                        </FeatureCard>
                    </Box>
                </Stack>

                {/* Market Opportunity Section */}
                <SectionHeading variant="h3" gutterBottom>
                    Market Opportunity
                </SectionHeading>
                <SectionText variant="body1" color="textSecondary">
                    The design software market for physical products is valued at over $4B today, with a total addressable 
                    services market of nearly $2T. Moda aims to capitalize on this by providing a no-code design platform 
                    that empowers brands to create innovative, customer-centric products, faster and with reduced costs.
                </SectionText>

                {/* Key Features Section */}
                <SectionHeading variant="h3" gutterBottom>
                    Key Features
                </SectionHeading>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center" sx={{ flexWrap: 'wrap', mb: 8 }}>
                    {['Collaborative Canvas', 'Generative AI Design Tools', 'End-to-End Workflow'].map((feature, index) => (
                        <Box key={index} sx={{ flex: '1 1 200px', mb: 4 }}>
                            <FeatureCard>
                                <FeatureCardImage
                                    src="https://via.placeholder.com/300x140/333/fff"
                                    alt={feature}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {feature}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        A brief description of {feature.toLowerCase()} that describes its function and benefit to the user.
                                    </Typography>
                                </CardContent>
                            </FeatureCard>
                        </Box>
                    ))}
                </Stack>

                {/* Call to Action */}
                <Box sx={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <SectionHeading variant="h4" gutterBottom>
                        Ready to Transform Your Design Process?
                    </SectionHeading>
                    <SectionText variant="body1" color="textSecondary">
                        Moda is here to empower you to design physical products that resonate with your customers. 
                        Join us on a journey to democratize product design for everyone.
                    </SectionText>
                    <CallToActionButton variant="contained">Get Started Today</CallToActionButton>
                </Box>
            </CenteredContainer>
        </Container>
    );
};

export default HomePage;
