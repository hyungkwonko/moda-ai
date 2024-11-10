// frontend/src/pages/HomePage.tsx

import React from 'react';
import { Box, Typography, Button, Stack, Card, CardContent, CardMedia } from '@mui/material';

const HomePage: React.FC = () => {
    return (
        <Box sx={{ minHeight: '100vh', padding: '2rem', color: '#333' }}>
            {/* Centered Container with Max Width */}
            <Box sx={{ maxWidth: '900px', margin: 'auto' }}>
                {/* Header Section with Main Mockup */}
                <Box sx={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#111' }}>
                        Moda: Intelligent Design for Physical Products
                    </Typography>
                    <Typography variant="h5" color="textSecondary" gutterBottom sx={{ color: '#666' }}>
                        Enabling anyone to design products smarter, faster, and with data-driven insights
                    </Typography>
                    
                    {/* Main Mockup Video/Image */}
                    <Box sx={{ margin: 'auto', maxWidth: '100%', mt: 4, mb: 4 }}>
                        <Card sx={{ boxShadow: 4, borderRadius: '8px' }}>
                            <CardMedia
                                component="video"  // Change to "img" if using an image
                                src="https://www.w3schools.com/html/mov_bbb.mp4"  // Replace with actual video link or mockup image link
                                autoPlay
                                loop
                                muted
                                controls
                                sx={{ height: { xs: '300px', md: '450px' }, objectFit: 'cover', borderRadius: '8px' }}
                            />
                        </Card>
                    </Box>

                    <Button variant="contained" sx={{ backgroundColor: '#111', color: '#fff', mt: 2, padding: '0.8rem 1.5rem', '&:hover': { backgroundColor: '#333' } }}>
                        Request a Demo
                    </Button>
                </Box>

                {/* Problem & Solution Section with Images */}
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" sx={{ flexWrap: 'wrap', mb: 6 }}>
                    <Box sx={{ flex: '1 1 300px', mb: 4 }}>
                        <Card sx={{ height: '100%', boxShadow: 2, backgroundColor: '#fff', color: '#333' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://via.placeholder.com/600x200/333/fff"  // Updated placeholder image for monochrome style
                                alt="Problem Illustration"
                            />
                            <CardContent sx={{ minHeight: '200px' }}>
                                <Typography variant="h4" gutterBottom sx={{ color: '#111' }}>
                                    The Problem
                                </Typography>
                                <Typography variant="body1" color="textSecondary" sx={{ color: '#666' }}>
                                    Current design tools like Adobe, Autodesk, and Rhino are outdated and hard to use. 
                                    They lack collaboration features, are disconnected from company data, and create 
                                    siloed workflows that lead to uninformed design decisions and waste. Moda solves 
                                    this by bringing generative tools and business intelligence into a collaborative 
                                    browser-based workspace.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={{ flex: '1 1 300px', mb: 4 }}>
                        <Card sx={{ height: '100%', boxShadow: 2, backgroundColor: '#fff', color: '#333' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://via.placeholder.com/600x200/333/fff"  // Updated placeholder image for monochrome style
                                alt="Solution Illustration"
                            />
                            <CardContent sx={{ minHeight: '200px' }}>
                                <Typography variant="h4" gutterBottom sx={{ color: '#111' }}>
                                    Our Solution
                                </Typography>
                                <Typography variant="body1" color="textSecondary" sx={{ color: '#666' }}>
                                    Moda provides an intelligent, collaborative design workflow that combines generative AI, 
                                    business insights, and past customer data to empower brands in apparel, CPG, and more. 
                                    Like Canva and Figma did for graphics, Moda democratizes physical product design by 
                                    making it accessible and intuitive.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Stack>

                {/* Market Opportunity Section */}
                <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <Typography variant="h3" gutterBottom sx={{ color: '#111' }}>
                        Market Opportunity
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '700px', margin: 'auto', mb: 6, color: '#666' }}>
                        The design software market for physical products is valued at over $4B today, with a total addressable 
                        services market of nearly $2T. Moda aims to capitalize on this by providing a no-code design platform 
                        that empowers brands to create innovative, customer-centric products, faster and with reduced costs.
                    </Typography>
                </Box>

                {/* Product Features Section with Images */}
                <Box sx={{ mt: 6, textAlign: 'center' }}>
                    <Typography variant="h3" gutterBottom sx={{ color: '#111' }}>
                        Key Features
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center" sx={{ flexWrap: 'wrap', mb: 8 }}>
                        {['Collaborative Canvas', 'AI-Driven Insights', 'Generative Design Tools', 'End-to-End Workflow'].map((feature, index) => (
                            <Box key={index} sx={{ flex: '1 1 200px', mb: 4 }}>
                                <Card sx={{ height: '100%', boxShadow: 3, backgroundColor: '#fff', color: '#333' }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://via.placeholder.com/300x140/333/fff"  // Updated placeholder image for monochrome style
                                        alt={feature}
                                    />
                                    <CardContent sx={{ minHeight: '160px' }}>
                                        <Typography variant="h6" color="primary" gutterBottom sx={{ color: '#111' }}>
                                            {feature}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" sx={{ color: '#666' }}>
                                            {/* Placeholder text for each feature */}
                                            A brief description of {feature.toLowerCase()} that describes its function and benefit to the user.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Stack>
                </Box>

                {/* Call to Action */}
                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <Typography variant="h4" gutterBottom sx={{ color: '#111' }}>
                        Ready to Transform Your Design Process?
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '600px', margin: 'auto', color: '#666' }}>
                        Moda is here to empower you to design physical products that resonate with your customers. 
                        Join us on a journey to democratize product design for everyone.
                    </Typography>
                    <Button variant="contained" sx={{ backgroundColor: '#111', color: '#fff', mt: 2, padding: '0.8rem 1.5rem', '&:hover': { backgroundColor: '#333' } }}>
                        Get Started Today
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
